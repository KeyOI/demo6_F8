// const { default: mongoose } = require("mongoose")

module.exports = {
    //conver model ARRAY json from db mongodb to oject
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },

    //conver model json from db mongodb to oject
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
