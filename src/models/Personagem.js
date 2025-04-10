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
}