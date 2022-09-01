import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version, author } = PKG;
console.log(`${name} v${version} ${author}`);

const { genesis } = Block; 
console.log(genesis.toString());

const block = new Block(Date.now(), genesis.hash, 'h4sh', 'd4ta');
console.log(block.toString());

const block2 = new Block(Date.now(), block.hash, 'h4sh/block2', 'd4t4/2');
console.log(block2.toString());



