const express = require('express');
const app = express();
const port = 8080;
app.use(express.json())

app.get('/api', (req, res)=>{
    res.status(200).send('Response from root route!')
})

app.post('/api', (req, res) =>{
    console.log(req.body);
    res.status(201).send('body recieved')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))