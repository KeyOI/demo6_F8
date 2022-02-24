const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { send } = require('express/lib/response');

const app = express();
const PORT = 3000;

const route = require('./routes');
const db = require('./config/db')

// connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//morgan http logger
app.use(morgan('combined'));

//template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//routes init
route(app);

app.listen(PORT, () => {
    console.log(`\n  http://localhost:${PORT}\n`);
});
