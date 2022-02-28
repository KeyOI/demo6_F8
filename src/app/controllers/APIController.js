const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class APIController {
    // [GET] /
    courses(req, res,                                    next) {
        Course.find({})
            .sort({ updatedAt: 'desc' })
            .then((courses) => {
                res.json(courses);
            })  
            .catch(next);
    }
}

module.exports = new APIController();
