// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function SetMessage(string memory newMessage) public {
        message = newMessage;
    }
}
