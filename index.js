const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json())
app.listen(
    PORT, () => console.log(`it's alive on port ${PORT}`)
)

app.get('/tshirt',(req, res) => {
    res.status(200).send({
        tshirt: '0^',
        size: 'Large'
    })
});

app.post('/tshirt/id', (req, res) => {

    const {id} = req.params;
    const {logo} = req.body;

    if (!logo){
        res.status(418).send({message: 'We need a logo' })
    }

    res.send({
        tshirt: `Yes your ${logo} and ID is ${id}`
    });
});