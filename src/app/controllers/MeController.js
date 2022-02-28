const Course = require('../models/Course');
//conver model json from db mongodb to oject
const { mutipleMongooseToObject } = require('../../util/mongoose');
const mongoose_delete = require('mongoose-delete');

class MeController {
    // [GET] /stored/courses
    storeCourses(req, res, next) {
        /**
         * sắp xết được chuyền vào thừ params url
         */

        // **
        // giúp cho người dùng dễ biết được có bao nhiêu bản ghi trong thùng rác
        // **
        // sự dụng promise để giúp cho việc trả dữ liệu cùng lúc
        // sau đó hiện xự lý sau khi có giá trị ĐÚNG
        // promise sự lý nhiều hàm promise cùng lúc và trả về dự liệu sau đó
        // khi đúng sẽ thực hiện xự lý

        //promise chuyền đối số sẽ nhận được
        Promise.all([
            Course.find({}).sortable(req),
            // đếm các bản ghi (documment) đã xóa bằng method countDocumentsDeleted
            // trả về  giá trị number
            Course.countDocumentsDeleted(),
        ])
            //countDeleted biến đếm documnet đã xóa
            .then(([courses, countDeleted]) => {
                res.render('./me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                    // truyền số điếm DocumnetDelete
                    countDeleted,
                });
            })
            .catch(next);
        Course.find({}).catch(next);
    }

    // [GET] /trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .sort({ deletedAt: 'desc' })
            .then((courses) => {
                res.render('./me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
