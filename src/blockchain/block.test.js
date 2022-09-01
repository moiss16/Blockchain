import Block from './block';

describe ('Block', () => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 'transction0';
        hash = "hash0";
    });

    it('Crear instancia con parametros', () =>{
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    it('Usando static mine', () =>{
        const block = Block.mine( previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
    });

    it('Usando static hash', () =>{
        const block = Block.hash( timestamp, previousBlock, data);

        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hasOutput = "c5057e32ba4a79fe508a63056b839a2b415c4349652ea648c7ca890165903dc9";

        expect(hash).toEqual(hasOutput);
    });

    it('Usando toString', () =>{
        const block = Block.mine( previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
        
    });
});