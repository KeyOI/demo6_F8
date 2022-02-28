const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

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
    home(req, res, next) {
        // Callback
        // Course.find({},function(err, courses){
        //     if(!err){
        //         res.json(courses)
        //     }else{
        //         res.status(400).json({errors:"error"})
        //     }
        // })

        //Promise
        Course.find({})
            .then((courses) => {
                // thư viện handlebar khi chuyển array qua temple thì {{this}} là 1 documment
                // nhưng các (name, description ) nằm trong proto của mongodb
                // => chuyển Courses thành 1 cái mạng map
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            // loi se tra ve next, cu phap day du la. catch(error => next(error))
            .catch(next);

        // res.render('home');
    }
}

module.exports = new NewsController();
