const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // route /news to newController.index
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    // app.get('/', (req, res)=>{
    //     res.render('home')
    // })

    // app.get('/home', (req, res)=>{
    //     res.send('welcome to my website')
    // })

    // app.get('/search',(req,res)=>{
    //     console.log(req.body);
    //     res.render('search')
    // })
}

module.exports = route;
