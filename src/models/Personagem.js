const { v4: uuidv4} = require('uuid');

class Personagem{
    constructor ( nome, nomeFantasia, classe, level, forca, defesa ){
    this.id = uuidv4();
    this.nome = nome;
    this.nomeFantasia = nomeFantasia;
    this.classe = classe;
    this.level = level;
    this.forcaBase = forca;
    this.defesaBase = defesa;
    this.itens = [];
}

get forca (){
    return this.forcaBase + this.itens.reduce((soma, item) => soma + item.forca, 0 );
}

get defesa(){
    return this.defesaBase + this.itens.reduce((soma, item) => soma + item.defesa, 0 );
}

adicionarItem(item) {
    if (item.tipo === 'Amuleto' && this.itens.some(i => i.tipo === 'Amuleto')) {
        throw new Error('Personagem já possui um amuleto equipado!');
    }
    this.itens.push(item);
}

removerItem( itemId ){
    this.itens = this.itens.filter( item => item.id !== itemId );
}

buscarAmuleto(){
    return this.itens.find( item => item.tipo === 'Amuleto' );
}
}

module.exports = Personagem;