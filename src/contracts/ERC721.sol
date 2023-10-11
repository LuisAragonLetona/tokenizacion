// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;

/*
 Se crea la funcion para mintear tokens
    1. El NFT debe apuntar a una direccion
    2. Se debe mantener un registro de los IDS de los TOKENS
    3. se debe mantener un registro de los propietarios (direciones de wallets) de los tokens Id
    4. Cuantos tokens tiene un propietario (Direccion)
    5. Se crea unevento que haga un registro de tranferencia - direccion del contrato donde 
       se esta acuñando (Minteo) el Id.
*/

import './interfaces/IERC721.sol';

contract ERC721 is IERC721 {

    mapping(uint256 => address) private _tokenOwner;

    mapping(address => uint256) private _OwnedTokenCount;

    // Verifica los tokens aprovados en la direccion
    mapping(uint256 => address) private _tokenApprovals;

    function balanceOf(address _owner) public view returns (uint256) {
        require (_owner != address(0), 'La Direccion esta en Cero');
        return _OwnedTokenCount[_owner];
    }

    function ownerOf(uint256 _tokenId) public view  returns (address) {
        address owner = _tokenOwner [_tokenId];
        require (owner != address(0), 'La Direccion esta en Cero');
        return owner;
    }

    //

    function _exists(uint256 tokenId) internal view returns(bool) {
        address owner = _tokenOwner[tokenId];

        return owner != address(0);
    }

    function _mint(address to, uint256 tokenId) internal virtual {
        //revisaremos que el address no sea cero!
        require(to != address(0), 'ERC721 DIRECCION DE ACUCCION ES CERO');

        //TokenID debe no existir anteriomente
        require(!_exists(tokenId), 'ERC721 YA EXISTE');
        
        //Apuntamos la direccion del propietario
        _tokenOwner[tokenId] = to;

        // Cuantos tokens tiene ese propietario (Direccion) ?
        _OwnedTokenCount[to] += 1;

        // se emite el vento de tranferencia
        emit Transfer(address(0), to, tokenId);
    }

    //debemos lamar esta funcion para aumentar la seguiridad
    function _transferFrom(address _from, address _to, uint256 _tokenId) internal {
        require(_to != address(0), 'Error - ERC721 TRANfIERE A UNA DIRECCION CERO');
        require(ownerOf(_tokenId) == _from, 'SE ESTA TRATANDO DE TRANFERIR A UNA IDRECION NO PORPIETARIA!');

        _OwnedTokenCount[_from] -= 1;
        _OwnedTokenCount[_to] += 1;

        _tokenOwner[_tokenId] = _to;

        emit Transfer(_from, _to, _tokenId);
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) public {
        require(isApprovedOrOwner(msg.sender, _tokenId));
        _transferFrom(_from, _to, _tokenId);
    }

    function approve(address _to, uint256 tokenId) public {
        address owner = ownerOf(tokenId);
        require(_to != owner, 'Error - aprobacion al propietario actual');
        require(msg.sender == owner, 'La persona que llama actualmente debe ser el propietario');
        _tokenApprovals[tokenId] = _to;
        emit Approval(owner, _to, tokenId);
    }

    function isApprovedOrOwner(address spender, uint256 tokenId) internal view returns(bool) {
        require(_exists(tokenId), 'El Token no existe');
        address owner = ownerOf(tokenId);
        return(spender == owner);
    }


}