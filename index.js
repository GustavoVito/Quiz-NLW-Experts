const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para se referir a um script externo chamado 'xxx.js'?",
    respostas: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
    ],
    correta: 2
  },
  {
    pergunta: "Como você escreve 'Hello World' em uma caixa de alerta?",
    respostas: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "alert('Hello World');",
    ],
    correta: 2
  },
  {
    pergunta: "Como você cria uma função em JavaScript?",
    respostas: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()",
    ],
    correta: 0
  },
  {
    pergunta: "Como você chama uma função chamada 'myFunction'?",
    respostas: [
      "call function myFunction()",
      "call myFunction()",
      "myFunction()",
    ],
    correta: 2
  },
  {
    pergunta: "Como escrever um IF em JavaScript?",
    respostas: [
      "if i = 5 then",
      "if i == 5 then",
      "if (i == 5)",
    ],
    correta: 2
  },
  {
    pergunta: "Como um loop WHILE é escrito em JavaScript?",
    respostas: [
      "while (i <= 10; i++)",
      "while i = 1 to 10",
      "while (i <= 10)",
    ],
    correta: 2
  },
  {
    pergunta: "Como um loop FOR é escrito em JavaScript?",
    respostas: [
      "for (i = 0; i <= 5)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a maneira correta de escrever um array em JavaScript?",
    respostas: [
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 'red', 'green', 'blue'",
      "var colors = ['red', 'green', 'blue']",
    ],
    correta: 2
  },
  {
    pergunta: "Como você adiciona um comentário em JavaScript?",
    respostas: [
      "//This is a comment",
      "'This is a comment",
      "<!--This is a comment-->",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
    respostas: [
      "variable carName;",
      "var carName;",
      "v carName;",
    ],
    correta: 1
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


const corretas = new Set() // função que conta as respostas corretas
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição

// carrega o template do html em cada questão
for(const item of perguntas){
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

//carrega cada resposta da lista no template
for(let resposta of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  // separa cada pergunta pela quantidade de respostas
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
  dt.querySelector('input').onchange = (event) => { // função de clique
    const estaCorreta = event.target.value == item.correta // evento que reconhece se acertou ou não

    corretas.delete(item)
    if(estaCorreta){
      corretas.add(item)
    }

    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  
  // mostra a lista
  quizItem.querySelector('dl').appendChild(dt)
}

// remove o "Resposta A"
quizItem.querySelector('dl dt').remove()

// coloca a pergunta na tela
quiz.appendChild(quizItem)
}