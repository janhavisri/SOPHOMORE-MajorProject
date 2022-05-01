const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    description: String,
    thumbnail: String,
    heroimage: String,
    created: Date,
    valueAddition: Array
})

const model = mongoose.model('course', schema);

module.exports = model;