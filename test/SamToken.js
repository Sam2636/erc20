
var SamToken =artifacts.require("./SamToken.sol");

contract('SamToken',function(accounts){
    it('set the total supply upon deployment', function(){
        return SamToken.deployed().then(function(instance){
            tokenInstance =instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
            assert.equal(totalSupply.toNumber(),100000000,'sets the total supply to 10,00,00,000')
        })
    });
})