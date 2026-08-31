const express = require('express');
require('dotenv').config();
const db = require('./db');

const app = express();
app.use(express.json());

app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email } = req.body;
        const [result] = await db.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email]);
        res.status(201).json({ id: result.insertId, nome, email });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const [usuarios] = await db.query('SELECT * FROM usuarios');
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;
        await db.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id]);
        res.json({ mensagem: 'Usuário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});


app.post('/produtos', async (req, res) => {
    try {
        const { nome, preco, usuario_id } = req.body;
        const [result] = await db.query('INSERT INTO produtos (nome, preco, usuario_id) VALUES (?, ?, ?)', [nome, preco, usuario_id]);
        res.status(201).json({ id: result.insertId, nome, preco, usuario_id });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

app.get('/produtos', async (req, res) => {
    try {
        const [produtos] = await db.query('SELECT * FROM produtos');
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});