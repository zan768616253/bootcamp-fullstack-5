const express = require('express')

const testRoute= require('./routes/myTestRoute');
const calRoute= require('./routes/calculatorRoute');

const app= express()

app.use('/mytest', testRoute);
app.use('/calculator', calRoute);

const port= 3000
app.get('/', (req, res) =>{
    res.send('Hello World!')
})
app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})

const swaggerUi= require('swagger-ui-express');
swaggerDocument= require('./swagger.json');
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);