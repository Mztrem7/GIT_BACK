const express = require('express');
const app = express();
const Routes = require('./routes')

app.use(Routes)


app.listen('3343', ()=> console.log('Servidor ONLINE NA PORTA 3343'));
