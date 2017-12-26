var DemoContract = artifacts.require("DemoContract.sol");

contract('DemoContract', function(accounts) {
  it("should assert true", function(done) {
    var demo_contract = DemoContract.deployed();
    assert.isTrue(true);
    done();
  });

  it("sets the welcome", function(done) {
    DemoContract.deployed().then(instance => {
      return instance.GetMessage.call();
    }).then(message => {
      assert.equal(message, "Old message");
      done();
    });
  });

  it("allows message override", done => {
    var contract;

    DemoContract.deployed().then(instance => {
      contract = instance;
      return contract.SetMessage("New message");
    }).then(newMessage => {
      return contract.GetMessage.call();
    }).then(message => {
      assert.equal(message, "New message");
      done();
    });
  });
});
