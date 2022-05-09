// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SamToken {
    //constructor
    //set the token number of tokens
    //read the total number of tokens
    uint256 public totalSupply=100000000;

    mapping(address => uint256) public balanceOf;
    
    function samToken(uint256 _initialSupply) public {
        balanceOf[msg.sender]= _initialSupply;
        totalSupply = _initialSupply;     /// the value is not taken from here
    
    }
}
