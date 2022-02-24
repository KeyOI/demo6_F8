
const Course = require('../models/Course')

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
         
        Course.find({},function(err, courses){ 
            if(!err){
                res.json(courses)
            }else{
                res.status(400).json({errors:"error"})  
            }
        })
 

        // res.render('home');
    }
}

module.exports = new NewsController();
