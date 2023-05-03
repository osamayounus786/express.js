


const path = require('path');
const express = require('express');
const app = express();

// console.log(__dirname);
// console.log(path.join());
// console.log(app.use(express.static()));

// console.log(path.join(__dirname,'../public'));

// const staticPath = path.join(__dirname, '../public');

app.use(express.static(path.join(__dirname, '../public')));

// app.use(express.static(staticPath));

app.get('/home',(req,res)=>{
        res.send("helllo mamasitta");
})

app.listen(3000,()=>{
    console.log("server listening on 3000");
})


// express js to be continue 
//