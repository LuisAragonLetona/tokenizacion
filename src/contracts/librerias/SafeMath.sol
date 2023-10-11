// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;

library SafeMath {
    // sumar: r = x + y
    function add(uint256 x , uint256 y) internal pure returns(uint256) {
        uint256 r = x + y;
        require(r >= x, 'Safemath: desbordamiento de suma');
        return r;
    }

     // Resta: r = x - y
    function sub(uint256 x , uint256 y) internal pure returns(uint256) {
        require(y <= x, 'Safemath: desbordamiento de resta');
        uint256 r = x - y;
        return r;
    }

    //optimizar uso de gas en multiplicacion
    function mul(uint256 x , uint256 y) internal pure returns(uint256) {
        //gas optimizado
        if(x == 0) {
            return 0;
        }

        uint256 r = x * y;
        require(r / x == y, 'Safemath: desbordamiento de Multiplicacion');
        return r;
    }

    //Division
    function divide(uint256 x , uint256 y) internal pure returns(uint256) {
        require(y > 0, 'Safemath: desbordamiento de Division');
        uint256 r = x / y;
        return r;
    }

    //El fato de gas se mantiene intacto
    function mod(uint256 x , uint256 y) internal pure returns(uint256) {
        require(y != 0, 'Safemath: desbordamiento de modulo');
        uint256 r = x % y;
        return r;
    }
}