class NewsController {
    //[GET] /contact
    contact(req, res) {
        res.render('contact');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /
    home(req, res) {
        res.render('home');
    }
}

module.exports = new NewsController();
