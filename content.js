const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    air_quality: String,
    heat_islands: String,
    infrastructure: String,
    underserved: String,
    improvement: String,
    importance: Number,
    latitude: Number,
    longitude: Number
}, { collection: 'Consumerdata' });


const userData = mongoose.model('TelecomData', userSchema);

module.exports = userData;
