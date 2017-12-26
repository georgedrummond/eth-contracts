pragma solidity ^0.4.4;

contract DemoContract {
  string public message;

  function DemoContract() public {
    message = "Old message";
  }

  function SetMessage(string _message) public {
    message = _message;
  }

  function GetMessage() public view returns (string) {
    return message;
  }
}
