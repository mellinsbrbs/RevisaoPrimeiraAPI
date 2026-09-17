const express = require('express');

const app = express();
app.use(express.json());

let ALUNOS = [
  { id: 1, nome: "Bernardo", curso: "Desenvolvimento de sistemas" },
  { id: 2, nome: "Camily", curso: "Redes de computadores" },
  { id: 3, nome: "Kaue", curso: "Banco de dados" },
  { id: 4, nome: "Maria", curso: "Administração" },
  { id: 5, nome: "Marjory", curso: "Desenvolvimento de sistemas" },
]; 

app.get("/",(req,res)=>{
    res.json({
        message: "API alunos funcionando"

    })
}) 

app.get("/alunos",(req,res) =>{
    res.json(ALUNOS);
});

app.post("/alunos/cadastrar", (req,res) =>{
    console.log(req.body);
});


const PORTA = 3000;
app.listen(PORTA,()=>{
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
})
