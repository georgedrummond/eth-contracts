pragma solidity ^0.4.4;

contract DemoContract {
  // string public message;
  // uint public balance;

  // struct Depositor {
  //   address delegate;
  //   uint balance;
  // }
  //
  // Depositor[] public depositors;

  // address public seller;
  uint public balance;

  event EtherDeposited(address sender);

  function DemoContract() public {
    balance = 0;
  }

  function() public payable {
    //
    // Return contract amount if its less than
    // current balance
    //
    require(msg.value > balance);

    balance += msg.value;
    EtherDeposited(msg.sender);
  }

  // function deposit() public payable {
  //   // balance = msg.value;
  // }

  // function SetMessage(string _message) public {
  //   message = _message;
  // }
  //
  // function GetMessage() public view returns (string) {
  //   return message;
  // }
  //
  // function GetBalance() public view returns(uint) {
  //   return balance;
  // }

  // function deposit() public payable {
  //   require(false);
  //   // balance += msg.value;
  // }
}
