const express=require('express');

const blog=require('./router/blog')

const dog=require('./router/dog')



const app=express();
app.use('/blog',blog)
app.use('/dog',dog)


const port=3000;

app.get('/',(req,res)=>{
    res.send('hello world33')
})

app.get('/about',(req,res)=>{
    res.send('about world')
})

app.post('/',(req,res)=>{
    console.log("post request sucessfully");
    
    res.send('/ pe post request')
})

app.put('/',(req,res)=>{
    console.log("put request sucessfully");
    
    res.send('/ pe put request')
})

app.delete('/',(req,res)=>{
    console.log("delete request sucessfully");
    
    res.send('/ pe delete request')
})
app.patch('/',(req,res)=>{
    console.log("patch request sucessfully");
    
    res.send('/ pe patch request')
})
app.get('/index',(req,res)=>{
    res.sendFile('/templates/index.html',{root:__dirname})
})
app.get('/api',async (req,res)=>{
    let a=await fetch('https://jsonplaceholder.typicode.com/posts')
    let b=await a.json()

    res.json(b[0]["title"])
})

app.listen(port,()=>{
    console.log(`server is listening on the port ${port}`);
    
})