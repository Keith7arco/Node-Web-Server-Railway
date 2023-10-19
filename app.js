require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//HandlerBars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico. La carpeta tiene prioridad antes que las rutas que se crean despues.
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('home',{
        nombre:'Keith',
        titulo:'Curso Node'
    });
});

app.get('/generic', (req, res) =>{
    res.render('generic',{
        nombre:'Keith',
        titulo:'Curso Node'
    });
});

app.get('/elements', (req, res) =>{
    res.render('elements',{
        nombre:'Keith',
        titulo:'Curso Node'
    });
});

app.get('*', (req, res) =>{
    res.render('404');
});

  
app.listen(port,()=>{
    console.log(`La app se encuentra en http://localhost:${port}`)
})