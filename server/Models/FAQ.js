const mongoose = require("mongoose");

const FAQSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    }
});

const FAQ = mongoose.model('FAQ', FAQSchema);
module.exports = FAQ;