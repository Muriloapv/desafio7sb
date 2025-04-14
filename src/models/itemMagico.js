const { v4: uuidv4 } = require('uuid');

class ItemMagico {
    constructor(nome, tipo, forca, defesa) {
        if (forca === 0 && defesa === 0) {
            throw new Error('Item deve ter pelo menos um atributo de ataque ou defesa');
        }
        if (forca > 10 || defesa > 10) {
            throw new Error('Atributos de ataque e defesa não podem ser maiores que 10!');
        }

        this.id = uuidv4();
        this.nome = nome;
        this.tipo = tipo;

        if (tipo === 'Arma') {
            this.forca = forca;
            this.defesa = 0;
        } else if (tipo === 'Armadura') {
            this.forca = 0;
            this.defesa = defesa;
        } else if (tipo === 'Amuleto') {
            this.forca = forca;
            this.defesa = defesa;
        } else {
            throw new Error('Tipo de item inválido!');
        }
    }
}

module.exports = ItemMagico;