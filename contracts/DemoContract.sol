pragma solidity ^0.4.4;

contract DemoContract {
  string message = "Hello Demo Contract";

  function DemoContract() {
    // constructor
  }

  function GetMessage() returns (string) {
    return message;
  }
}
