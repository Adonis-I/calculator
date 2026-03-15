const express = require('express')
const calc = require('./index')

const app = express()

app.get('/add/:a/:b', (req,res)=>{
    const result = calc.add(Number(req.params.a), Number(req.params.b))
    res.send("Result = " + result)
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})