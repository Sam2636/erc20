const SamToken = artifacts.require("./SamToken.sol");

module.exports = function (deployer) {
  deployer.deploy(SamToken);
};

  
