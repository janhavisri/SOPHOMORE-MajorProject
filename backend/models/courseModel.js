const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    description: String,
    thumbnail: String,
    heroimage: String,
    created: { type: Date, default: new Date() },
    valueAddition: Array
})

const model = mongoose.model('portfolio', schema);

module.exports = model;