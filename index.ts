import express from "express"

const app = express()

app.get('/', (req, res)=>{
    res.send("hola")
})

app.listen(3000, ()=>{
    console.log("escuchando http://localhost:3000");
})