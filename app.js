const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // res.status(404).send('page cant be found')
})

app.post('/login', (req, res) => {

})





app.listen(port, ()=> console.log(`General Kenobi ! You're on : ${port} port`))