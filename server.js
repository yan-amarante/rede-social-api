const express = require('express');
const contaRoutes = require('./src/conta/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Hello Word");
});

app.use('/api/v1/contas/', contaRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`))