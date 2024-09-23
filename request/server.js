const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res)=>{
  res.send('hello about')
})
app.get('/contact',(req,res)=>{
  res.send('hello contact')
})
app.get('/blog',(req,res)=>{
  res.send('hello blog')
})
app.get('/blog/:aditya',(req,res)=>{
  console.log(req);
  
  res.send(`hello ${req.params.aditya}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})