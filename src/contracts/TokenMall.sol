// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import './ERC721Connector.sol';

contract TokenMall is ERC721Connector {

    // matriz para guardar nuestros nfts
    string[] public TokenMallNFTS;

    mapping(string => bool) _tokenmallNFTExists;

    function mint(string memory _tokenmall) public {

        require(!_tokenmallNFTExists[_tokenmall], 'Error - token already exists');

        TokenMallNFTS.push(_tokenmall);
        uint _id = TokenMallNFTS.length -1;

        _mint(msg.sender, _id);

        _tokenmallNFTExists[_tokenmall] = true;
    }

    constructor() ERC721Connector('TokenMall','ETH') {}

}