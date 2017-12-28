pragma solidity ^0.4.4;

contract HodlContract {
    uint public balance;

    struct Hodler {
      address delegate;
      uint balance;
    }

    mapping(address => Hodler) public hodlers;

    event EtherDeposited(address sender);
    event EtherWithdrawn(address sender);
    event EtherDisolved(address sender);

    function HodlContract() public {
        balance = 0;
    }

    function() public payable {
        require(msg.value > balance);

        balance += msg.value;
        EtherDeposited(msg.sender);
    }

    function disolve() public {
        msg.sender.transfer(balance);
        balance = 0;
    }
}

// pragma solidity ^0.4.4;
//
// contract DemoContract {
//   // string public message;
//   // uint public balance;
//
//   // struct Depositor {
//   //   address delegate;
//   //   uint balance;
//   // }
//   //
//   // Depositor[] public depositors;
//
//   uint public balance;
//
//   event EtherDeposited(address sender);
//
//   function DemoContract() public {
//     balance = 0;
//   }
//
//   function() public payable {
//     //
//     // Return contract amount if its less than
//     // current balance
//     //
//     require(msg.value > balance);
//
//     balance += msg.value;
//     EtherDeposited(msg.sender);
//   }
// }
