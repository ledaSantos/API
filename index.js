//index.js
import dotenv from "dotenv";
import express from "express";
import { selectUsuarios } from "./bd.js";

dotenv.config();

const app = express(); // Instancia o Express
const port = 3000; // Define a porta

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  // Cria a rota da raiz do projeto
  res.json({
    nome: "Leidiane Santos", // Substitua pelo seu nome
  });
});

app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }

  console.log("Rota GET/usuarios solicitada");
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

//index.js
import { selectUsuarios, selectUsuario } from "./bd.js";

//index.js
app.get("/usuario/:id", async (req, res) => {
  console.log("Rota GET /usuario/# solicitada");
  try {
    const usuario = await selectUsuario(req.params.id);
    if (usuario.length > 0) res.json(usuario);
    else res.status(404).json({ message: "Usuário não encontrado!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});