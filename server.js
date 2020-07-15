//modulos
const express = require('express')
const app = express()
const hbs = require('hbs');
/*importando los helpers*/
require('./hbs/helpers/herlpers');

const port = process.env.PORT || 3000;

//configurando la carpeta publica
app.use(express.static(__dirname + '/public'));

//Express hbs engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//routes
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'chema hernandez',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});