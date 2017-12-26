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
      assert.equal(message, "hi");
      done();
    });
  });
});
