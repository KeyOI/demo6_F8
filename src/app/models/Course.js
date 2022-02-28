const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        name: { type: String },
        description: { type: String, maxlength: 600 },
        image: { type: String, maxlength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, maxlength: 255 },
    },
    {
        timestamps: true,
    },
);

// add custom sort helpers
CourseSchema.query.sortable = function (req) {
    // check req.query.type có nằm trong giá trị đinh sẵn là ['asc','desc'] nếu không sẽ trả về mặt định
    const isValidateType = ['asc', 'desc'].includes(req.query.type)
        ? req.query.type
        : 'desc';

    // nếu có tồn tại params của query '_sort' thực hiện phương thức sort
    // model.sort({key:typeSort})
    // typeSort: ['asc','desc']
    if (req.query.hasOwnProperty('_sort')) {
        this.sort({
            [req.query.column]: [isValidateType],
        });
    }
    return this;
};

// add delete soft
CourseSchema.plugin(mongoose_delete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', CourseSchema);
