require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain equip hover clog front security'; 
let testAccounts = [
"0x0c62a85c3a7357850cf42377d6ab19c6547d482a4c04c2c7535bfed6767ac507",
"0xddbbea1ada996fd4558cb881298cb0fafa670fc06ad75e1aeb11479a2a3acb81",
"0xd5b71102a40b7eb48ad849fd74a6532c45c6e748a192058f4a4c6d0c8bfe10a3",
"0x1c13d751cb83445e90a11e3a1652cc61dd604287ea9271ec58b7fe12a29a5aa3",
"0x438b5261bf8d7a5b4b650f4ecacbd6224b3ef5b6cc0c0b6da17a53ceb80dd968",
"0xd003f6bc7012f7b8f67bdfad951b1261d0e27bb291f149407468f421547b3265",
"0xf24b912fa9f8cdad79e9d63719de2238573cd3ff126528826d86d5d72427c96c",
"0x0612eff3e59d34dbde6746e2e49c7ccb7bdde0d01a7bedf1d8201b945ae9256d",
"0xe628eeb44d6fadc35853bfc9e7b4f5b37815903218c935a105452bd2a4cb778a",
"0x5283a29facd258003db758ffa4f58ef55516073bcde7c1c6d854973368202e1b"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
