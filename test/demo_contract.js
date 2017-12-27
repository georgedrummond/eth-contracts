var DemoContract = artifacts.require("DemoContract.sol");

contract('DemoContract', function(accounts) {
  // it("should assert true", function(done) {
  //   var demo_contract = DemoContract.deployed();
  //   assert.isTrue(true);
  //   done();
  // });
  //
  // it("sets the welcome", function(done) {
  //   DemoContract.deployed().then(instance => {
  //     return instance.GetMessage.call();
  //   }).then(message => {
  //     assert.equal(message, "Old message");
  //     done();
  //   });
  // });
  //
  it('has some stuff', done => {
    DemoContract.deployed().then(instance => {
      web3.eth.getBalance(accounts[0], (err, balance) => {
        let eth = web3.fromWei(balance.toNumber(), 'ether');
        assert.equal(eth, 98.2630808);
        done();
      });
    });
  });

  it('setting and reading balance', done => {
    var contract;

    var account0 = accounts[0];
    var account1 = accounts[1];

    DemoContract.deployed().then(instance => {
      contract = instance;
    //   return contract.GetBalance.call();
    // }).then(balance => {
    //   assert.equal(balance.toNumber(), 3);

      var eth = web3.toWei(1.2, 'ether');

      return contract.sendTransaction({
        value: eth,
        gas: 4712388,
        from: account0,
      });
    }).then(() => {
    //   return contract.GetBalance.call(account0);
    // }).then(balance => {
    //   assert.equal(2, balance);
      done();
    })
  });

  // describe("SetMessage", () => {
  //   it("allows message override", done => {
  //     var contract;
  //
  //     DemoContract.deployed().then(instance => {
  //       contract = instance;
  //       return contract.SetMessage("New message");
  //     }).then(newMessage => {
  //       return contract.GetMessage.call();
  //     }).then(message => {
  //       assert.equal(message, "New message");
  //       done();
  //     });
  //   });
  // });
});
