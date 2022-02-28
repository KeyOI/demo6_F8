const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education');
        console.log('\n connect DB success \n');
    } catch (error) {
        console.log(`\n connect DB FAILURE ${error} \n `);
    }
}

module.exports = { connect };
