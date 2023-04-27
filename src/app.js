


const express = require('express');


const app = express()

app.get('/',(req,res)=>{
        res.send("helllo mamasitta");
})

app.listen(3000,()=>{
    conole.log("server listening on 3000");
})


// express js to be continue 