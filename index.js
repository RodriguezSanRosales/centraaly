const express = require('express');
const app = express();//ejecutamos express
const port = 8080;
const chalk = require('chalk');//pinta colores en la consola

//rutas
app.get('/',(req, res) => {
    res.send('respondiendo c:');
});
// app.post();
// app.post();
// app.deleted();

//Escuchar peticiones en un puerto
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
    console.log(chalk.magenta(`http://localhost:${port}`));

});