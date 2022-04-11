const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

const { getTodos, insertTodo, deleteTodo } = require('./models/queries');

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middlewares
app.use('/assets', express.static(__dirname + '/public/assets') );
app.use( express.json() );
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/todo-create', (req, res) => {
    res.render('createTodo');
});

app.get('/todos', async (req, res) => {
    const todos = await getTodos();
    res.json({todos});
});

app.post('/todos', async (req, res) => {
    const { nombre, descripcion } = req.body;
    await insertTodo(nombre, descripcion);
    res.render('createTodo');
});

app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const respuesta = await deleteTodo(id);
    respuesta > 0 ? res.send(`El curso ${id} fue eliminado con éxito.`) : res.send('No existe uncurso registrado con ese id.');
});

app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => console.log(`Server initialized at port ${port}.`));