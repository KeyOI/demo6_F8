const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // route /news to newController.index
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
 
}

module.exports = route;
