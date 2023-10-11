// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
    address public owner = msg.sender;
    uint public last_Completed_Migration;

    modifier restricted() {
        require(
            msg.sender == owner,
            "This function is restricted to the contract's owner"
        );
        _;
    }

    function setCompleted(uint completed) public restricted {
        last_Completed_Migration = completed;
    }

    function upgrade(address new_address) public restricted {
      Migrations upgrade = Migrations(new_address);
      upgrade.setCompleted(last_Completed_Migration);
    }
}
