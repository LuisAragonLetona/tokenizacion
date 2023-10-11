// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;

import './ERC721Connector.sol';

contract TokenMall is ERC721Connector {

    //Matriz para guardar nuestros NFTs
    string[] public TokenMallNFT;

    mapping(string => bool) _TokenMallNFTExists;

    function mint(string memory _tokenmall) public {

        require(!_TokenMallNFTExists[_tokenmall], 'Error - este Token ya existe');

        TokenMallNFT.push(_tokenmall);
        uint _id = TokenMallNFT.length -1;

        _mint(msg.sender, _id);

        _TokenMallNFTExists[_tokenmall] = true;
    }

    constructor() ERC721Connector('TokenMall','SepoliaETH') {}

}
