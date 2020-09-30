const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    sample: String,
});

module.exports = mongoose.model('Sample', newSchema);
