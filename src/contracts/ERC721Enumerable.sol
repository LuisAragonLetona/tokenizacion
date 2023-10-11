// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;

import './ERC721.sol';

contract ERC721Enumerable is ERC721 {

    uint256[] private _allTokens;

    // Mapa para identificar la posición del token en la matriz
    mapping(uint256 => uint256) private _allTokensIndex;

    // Mapa del propietario a la lista de todos los tokensId que el propietario tiene
    mapping(address => uint256[]) private _ownedTokens;

    // Mapa del TokenId al índice de la lista de tokens del propietario
    mapping(uint256 => uint256) private _ownedTokensIndex;


    // Agregar tokens a la matriz _allTokens y actualizar el índice del token
    function _addTokensToAllTokenEnumeration(uint256 tokenId) private {
        _allTokensIndex[tokenId] = _allTokens.length;
        _allTokens.push(tokenId);
    }

    // Agregar tokens al mapa del propietario y actualizar el índice del token
    function _addTokensToOwnerEnumeration(address to, uint256 tokenId) private {
        _ownedTokens[to].push(tokenId);
        _ownedTokensIndex[tokenId] = _ownedTokens[to].length - 1;
    }

    function _mint(address to, uint256 tokenId) internal override(ERC721) {
        super._mint(to, tokenId);
        // Agregar tokens al propietario y a la lista total de tokens
        _addTokensToOwnerEnumeration(to, tokenId);
        _addTokensToAllTokenEnumeration(tokenId);
    }

    //Retornar token por Indice
    function tokenByIndex(uint256 index) public view returns(uint256) {
        require(index < totalSupply(), "Index out of bounds");
        return _allTokens[index];
    }


    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256) {
        require(index < _ownedTokens[owner].length, "Index out of bounds");
        return _ownedTokens[owner][index];
    }

     function totalSupply() public  view returns (uint256) {
        return _allTokens.length;
    }
}
