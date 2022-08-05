const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
 
const { abi, evm } = require('./compile');
const MNEMONIC = 'special join maple library another replace wrap rare shy wait scatter absurd'
const INFURA_URL = 'https://rinkeby.infura.io/v3/2fa376e4b0644b269a73401ee4652e23'


provider = new HDWalletProvider(MNEMONIC,INFURA_URL);
   
  const web3 = new Web3(provider);
   
  const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
   
    console.log('Attempting to deploy from account', accounts[0]);
   
    const result = await new web3.eth.Contract(abi)
      .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
      .send({ gas: '1000000', from: accounts[0] });
   
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
  };
   
  deploy();

