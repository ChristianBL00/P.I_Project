CREATE DATABASE tradefy_db;		
USE tradefy_db;

CREATE TABLE usuario (
	id_usuario INT auto_increment primary key,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    senha VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(13) NOT NULL,
    cidade_estado VARCHAR(255) NOT NULL
);

CREATE TABLE itemEsportivo (
	id_itemEsportivo INT auto_increment primary key,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    estado_conservacao VARCHAR(255) NOT NULL UNIQUE,
    modalidade_negocio DECIMAL(10, 2) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	id_usuario INT NOT NULL,
	id_categoria INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
	FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

CREATE TABLE categoria (
	id_categoria INT auto_increment primary key,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE transacao (
	id_transacao INT auto_increment primary key,
	status_transacao VARCHAR(255) NOT NULL UNIQUE,
    data_solicitacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo_transacao VARCHAR(255) NOT NULL UNIQUE,
    id_usuario INT NOT NULL,
	id_itemEsportivo INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
	FOREIGN KEY (id_itemEsportivo) REFERENCES itemEsportivo(id_itemEsportivo)
);