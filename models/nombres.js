const mongoose = require('mongoose');

const nombresSchema = mongoose.Schema({
    value: {
        type: Number,
        required: true
    }
    
})


module.exports = mongoose.model('Nombre', nombresSchema)