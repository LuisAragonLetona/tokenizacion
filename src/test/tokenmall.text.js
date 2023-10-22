const { assert } = require('chai');
const TokenMall = artifacts.require('./TokenMall');

require('chai').use(require('chai-as-promised')).should();

contract('TokenMall', (accounts) => {
    let contract;

    before(async () => {
        contract = await TokenMall.deployed();
    });

    // Pruebas

    // A) Pruebas, despliegue y acceso a las variables

    describe('despliegue', async () => {
        // 1. Despliegue correcto
        it('desplegado correctamente', async () => {
            const address = contract.address;
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
            assert.notEqual(address, '0x0');
            console.log('Dirección del contrato:', address);
        });

        // 2. Acceso a las variables
        it('tiene un nombre', async () => {
            const name = await contract.name();
            assert.equal(name, 'TokenMall');
            console.log('Nombre del contrato:', name);
        });

        it('tiene un símbolo', async () => {
            const symbol = await contract.symbol();
            assert.equal(symbol, 'SepoliaETH');
            console.log('Símbolo del contrato:', symbol);
        });
    });

    // B) Prueba de mintear o crear un NFT

    describe('minting', async () => {
        it('crea un nuevo token', async () => {
            const result = await contract.mint('https...1');
            const totalSupply = await contract.totalSupply();

            // ¿Todo salió bien?
            assert.equal(totalSupply, 1);
            console.log('Total de tokens:', totalSupply.toNumber());

            const event = result.logs[0].args;
            console.log('Evento de transferencia:', event);

            // Algo salió mal
            await contract.mint('https...1').should.be.rejected;
            console.log('Intento de minteo duplicado rechazado.');
        });
    });

    // C) Probar los índices
    describe('indexación', async () => {
        it('Lista TokenMall', async () => {
            // Se crean más tokens de prueba
            await contract.mint('https...2');
            await contract.mint('https...3');
            await contract.mint('https...4');
            const totalSupply = await contract.totalSupply();

            // Se crea un bucle para la lista de tokens y se almacenan
            let result = [];
            let TokenMall;
            for (let i = 1; i <= totalSupply; i++) {
                TokenMall = await contract.TokenMallNFTS(i - 1);
                result.push(TokenMall);
            }

            console.log('Tokens listados:', result);
        });
    });
});
