const express = require('express');

const app = express();
let Alunos = [
    {id: 1, nome: "Mel", idade: 16},
    {id: 2, nome: "Ana", idade: 17},
    {id: 3, nome: "João", idade: 18},
    {id: 4, nome: "Maria", idade: 19},
    {id: 5, nome: "Pedro", idade: 20},
];

app.get("/", (req, res) => {

    res.json({
        mensagem: "API Alunos funcionando"
    })
})

const PORTA = 3000
app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);

})