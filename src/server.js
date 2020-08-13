const proffys = [
   {
      name :"Diego Fernandes", 
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
      whatsapp: "92840328", 
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>",
      subject: "Quimica",
      cost: "20", 
      weekday: [0], 
      time_from:[120], 
      time_to: [280]
   },
   {
      name :"Mayk Brito", 
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
      whatsapp: "92840328", 
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>",
      subject: "Biologia",
      cost: "25", 
      weekday: [0], 
      time_from:[120], 
      time_to: [280]
   }
]


function pageLanding(req, res) {
   return res.sendFile(__dirname + "/views/index.html");
}
function pageStudy(req, res) {
   return res.sendFile(__dirname + "/views/study.html");
}
function pageGiveClasses(req, res) {
   return res.sendFile(__dirname + "/views/give-classes.html");
}

const express = require('express')
const server = express() 
const nunjucjs = require('nunjucks');

//configurar nunjucks
nunjucjs.configure('/src/views', {
   express: server,
   noCache: true
})

server
// configurar arquivos estaticos (css, scripts, imagens)
.use(express.static('public'))
// rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)