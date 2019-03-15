const express = require('express');
const app = express();//ejecutamos express para axeder a sus metodos
const port = 8080;
const chalk = require('chalk');//pinta colores en la consola

const api = require('./api');

//Escuchar peticiones en un puerto
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
    console.log(chalk.magenta(`http://localhost:${port}`));

});
app.use('/api', api);//importamos el index de la carpeta api para poder utlizarlo en caso de que se haga una peticion a esa ruta