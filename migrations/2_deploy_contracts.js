const TokenMall = artifacts.require("TokenMall");

module.exports = function (deployer) {
    deployer.deploy(TokenMall);
};