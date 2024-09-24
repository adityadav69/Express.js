const express=require('express');
const app=express()
const fs=require('fs')
const bird=require('./routes/blog')

const port=4000;

app.use('/bird',bird)

app.use(express.static("public"))

app.use((req,res,next)=>{
    console.log("in the middleware 1");
    fs.appendFileSync('public/aditya.txt',"Hey i am aditya yadav")
    next()
    
})

app.use((req,res,next)=>{
    res.sendFile('templates/index.html',{root: __dirname})
})

app.get('/',(req,res)=>{
    res.send("Hello World332")
})

app.listen(port,()=>{
    console.log(`App is running on the port ${port}`);
    
})