import express from 'express'

const app=express();

app.get('/',(req,res)=>{
  res.send('Author Poornima Aragala');
})

app.listen(3000,()=>{
  console.log('http://localhost:3000');
})