


const express = require('express');


const app = express()

app.get('/',(req,res)=>{
        res.send("helllo mamasitta");
})

app.listen(3000,()=>{
    console.log("server listening on 3000");
})