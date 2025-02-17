const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Tarea', schema, 'tareas');