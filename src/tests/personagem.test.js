// filepath: c:\Users\usuario\Desktop\Facul\7 semestre\desafio\crud - aventureiro\src\tests\personagem.test.js
const request = require('supertest');
const app = require('../index'); // Certifique-se de exportar o app no index.js

describe('Testando API de Personagens', () => {
    it('Deve criar um novo personagem', async () => {
        const res = await request(app)
            .post('/personagens')
            .send({
                nome: 'Aventureiro',
                nomeFantasia: 'Herói',
                classe: 'Guerreiro',
                level: 1,
                forca: 5,
                defesa: 5
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });
});