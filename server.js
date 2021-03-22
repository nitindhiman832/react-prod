const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT||9800;

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(_dirname,'build/index.html'))
});

app.listen(port);