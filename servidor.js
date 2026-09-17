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

app.post("/alunos/cadastrar", (req, res)=>{
    // console.log(req.body);
    const {nome, curso} = req.body
    // console.log("Nome:" + nome);
    // console.log(`Curso: ${curso}`);

    const id = ALUNOS.length > 0 ? ALUNOS[ALUNOS.length - 1].id + 1 : 1;
    // const id = ALUNOS.length > 0 ? Math.max(...ALUNOS.map(aluno => aluno.id)) + 1 : 1;
    const novoAluno = {
        nome : nome,
        curso : curso,
        id : id
    };
    ALUNOS.push(novoAluno);
    res.status(201).json({msg: "Aluno cadastrado com sucesso"});
});


const PORTA = 3000;
app.listen(PORTA,()=>{
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
})
