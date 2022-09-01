import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version, author } = PKG;
console.log(`${name} v${version} ${author}`);

const { genesis } = Block; 
console.log(genesis.toString());

//clase 2//
/*
const block = new Block(Date.now(), genesis.hash, 'h4sh', 'd4ta');
console.log(block.toString());

const block2 = new Block(Date.now(), block.hash, 'h4sh/block2', 'd4t4/2');
console.log(block2.toString());
*/

const block1 = Block.mine(genesis, 'trasact1');
console.log(block1.toString());

const block2 = Block.mine(block1, 'trasact2');
console.log(block2.toString());



