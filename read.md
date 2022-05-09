start with ------->truffle init


truffle migrate --reset
truffle console
SamToken.deployed().then(function(i){token=i;})