const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const apiRouter = require('./api');
const meRouter = require('./me');

function route(app) { 
    //route web
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    // route API
    app.use('/api', apiRouter);
    
    app.use('/', siteRouter);
 
}

module.exports = route;
