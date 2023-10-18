const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

process.env.port = 3001;

app.get('/', (req, res) => {
    res.send("<h1>Backend del sistema de donaciones</h1>");
})

const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

app.listen(process.env.port, () => {
    console.log(`Escuchando el puerto ${process.env.port}`);
}).on('error', err => {
    console.log('Error al iniciar el servidor: ', err);
})