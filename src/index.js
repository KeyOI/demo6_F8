const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const { send } = require('express/lib/response');

// sort middelware
const sortMiddelware = require('./app/middlewares/SortMiddelware');

const app = express();
const PORT = 3000;
// override method POST PUT GET
// lb: method-override' (express)
app.use(methodOverride('_method'));

//coustom middelware
app.use(sortMiddelware);

const route = require('./routes');
const db = require('./config/db');

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
        // custom handlebar for helper
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(PORT, () => {
    console.log(`\n  http://localhost:${PORT}\n`);
});
