var Migrations = artifacts.require("./Migrations.sol");
var DemoContract = artifacts.require("./DemoContract.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(DemoContract);
};
