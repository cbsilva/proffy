const proffys = [
   {
      name :"Diego Fernandes", 
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
      whatsapp: "92840328", 
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
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
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
      subject: "Biologia",
      cost: "25", 
      weekday: [0], 
      time_from:[120], 
      time_to: [280]
   },
   {
      name :"Cleberson Silva", 
      avatar: "https://avatars1.githubusercontent.com/u/47508990?s=400&u=7e081809e081e6c011a9b8ebd1394edefc61377a&v=4", 
      whatsapp: "19991329510", 
      bio: "Hi there 👋 My name is Cleberson Silva from Brazil (BR). I've been working as a developer since 2000. I am a specialist in 4gl progress developer for TOTVS Datasul, and like any tech lover.   I love to study and always be in front of new challenges, right now I'm training / studying front and backend languages (reactjs, angular) In my free time I like to watch (🎞️), series (📺), drink beer (🍺) with my friends and parents. Would you like to find me?",
      subject: "Matemática",
      cost: "20", 
      weekday: [0], 
      time_from:[120], 
      time_to: [720]
   }
]




function pageLanding(req, res) {
   return res.render("index.html");
}
function pageStudy(req, res) {
   return res.render("study.html", { proffys });
}
function pageGiveClasses(req, res) {
   return res.render("give-classes.html");
}

const express = require('express')
const server = express() 
const nunjucks = require('nunjucks');

//configurar nunjucks
nunjucks.configure('src/views', {
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