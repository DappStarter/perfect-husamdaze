require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth peace purpose gesture hen blue visa'; 
let testAccounts = [
"0xc59a4d713fb455ffb138a227156b3b42461d4c9886601aebdbfe1ff67fc368a6",
"0xe23df2548ea49519d74884d21d1479f1526d2c29b3442926bdb459298d2029a2",
"0xcb8860d6a0800fff74a1a7aa7c83d461080bea96f2d93e4c7cace646a1e39783",
"0x7b24834202c9780be1f607f38e2c9b86c75b1b83c5128689262243af912a0b42",
"0xbdd7e8914592ff995e20723fbb4e2db6b912773b53ff3bdc54a89525c7ee80f5",
"0xf4c11ac8f24076e0becdaa7ecaf6e73ffff4325c9b4dcefdf7637848c4a75668",
"0xf0f20a34c98ee7ce0f8e61b8b52f70a403935338d43202c787a7dc82b6e954f8",
"0x7c4815af39886a2da37f1b0751a46b76c27d8107014e30b666d4a75b4af16969",
"0xc210d7b6e48110274396aec26c83b4daaeae9e10f62d9d78ef3bb524c88d95af",
"0x1ed42cb14020fc6819a2eeadbe4e0ad11f8a81c197fad1c779525b7339c6fec5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
