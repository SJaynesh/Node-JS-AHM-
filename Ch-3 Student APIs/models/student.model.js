// Model => CRUD
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    rollNo: {
        type: Number,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    std: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
});


// model(modelName, schema, collectionName)
const Student = mongoose.model("Students", studentSchema, "Students");

module.exports = Student;