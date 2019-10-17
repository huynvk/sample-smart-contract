pragma solidity ^0.5.8;

contract SimpleStorage {
    uint public storedData;
    address public owner;

    constructor() public {
        owner = msg.sender;
        storedData = 0;
    }

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}