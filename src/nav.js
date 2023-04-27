const express = require('express');

const app = express();

// app.get("/",(req,res) =>{
//     res.status(200).send("Welcome to the Osama's World");
// })
// app.get("/about",(req,res) =>{
//     res.send("Welcome to the about page");
// })
// app.get("/contact",(req,res) =>{
//     res.send("Welcome to the contact page");
// })

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
    // res.send();
  })
  
  // POST method route
//   app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
//   })
  

app.listen('3000',()=>{
    console.log("Port is listening on 3000")
})