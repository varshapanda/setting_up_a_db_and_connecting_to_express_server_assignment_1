const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const app = express();

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
  console.log('Connected to Database');
})
.catch((error)=>{
  console.error(`Error connecting to database: ${error.message}`)
});

app.get('/',(req,res)=>{
  res.send('<h3>Backend for Customer Management System is running</h3>')
})

const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
  console.log(`Your server is running on PORT http://localhost:${PORT}`);
})
