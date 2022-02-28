
const Course = require('../models/Course')
//conver model json from db mongodb to oject
const {mongooseToObject} = require('../../util/mongoose')
//
const mongoose_delete = require('mongoose-delete');


class CourseController {
    
     
    // [GET] /
    show(req, res,next) {   
       Course.findOne( {
           slug: req.params.slug 
       })
       .then((course)=>{
           res.render('./courses/show',{
               course: mongooseToObject(course)
            })
       })
       .catch(next)
    }

    // [GET] /courses/create
    create(req,res,next){
        res.render('./courses/create')
    }

    // [POST] /courses/store
    store(req,res,next){  
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(req.body) 
        course.save()
        .then(()=>res.redirect('/me/stored/courses'))
        .catch(error => {

        })
    }

    // [GET] /:id/edit
    edit(req,res,next){ 
        Course.findOne({
            _id: req.params.id
        })
        .then(course=>{
            res.render('./courses/edit',{
                course: mongooseToObject(course)
            })
        })
        .catch(next)
    }

    // [PUT] /:id
    update(req,res,next){ 
 
        // updateOne({keyCheck: value},{properti},callback)
        Course.updateOne({
            _id: req.params.id
        },req.body)
        .then(course=>{
            res.redirect('/me/stored/courses')
        })
        .catch(next)
    }

    // [DELETE] /:id/
    delete(req,res,next){ 
        
        //delete form mongoose-delete => softdelete
        Course.delete({
            _id: req.params.id
        })
        .then(course=>{
            // quay lại trước đó
            res.redirect('back')
        })
        .catch(next)
    }

    // [PATCH]] /:id/restore
    restore(req,res,next){ 
         
        Course.restore({
            _id: req.params.id
        })
        .then(course=>{
            // quay lại trước đó
            res.redirect('back')
        })
        .catch(next)
    }

    // [DELETE] /:id/force
    forceDelete(req,res,next){ 
        
      
        Course.deleteOne({
            _id: req.params.id
        })
        .then(course=>{
            // quay lại trước đó
            res.redirect('back')
        })
        .catch(next)
    }
}

module.exports = new CourseController();
