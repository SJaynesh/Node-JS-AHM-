const express = require("express");

require("./config/db.config");

const Student = require('./models/student.model');

const app = express();

const PORT = 8000;

// Jaynesh@123 => cdfvrg5gtg5rgr5gThTHt484ht21r1g5ht1r2g15t

// POST http://localhost:8000/addStudent body

app.use(express.urlencoded()); // Middleware
app.use(express.json())

app.post('/addStudent', async (req, res) => {

    // add logic
    console.log("Student : ", req.body); // {rollNo : 101, fName : "Jaynesh", lName : "Sarkar"}

    const newStudent = await Student.create(req.body);

    console.log("New Student : ", newStudent);

    if (newStudent) {
        return res.status(201).json({
            status: 201,
            message: "Student added successfully..",
            error: false
        });
    } else {
        return res.status(400).json({
            status: 400,
            message: "Student addion failed..",
            error: true
        });
    }
});

app.get('/viewStudents', (req, res) => {

    // view logic

    return res.status(200).json({
        status: 200,
        message: "Students fetched successfully..",
        error: false
    });
});

app.delete('/deleteStudent', (req, res) => {

    // delete logic

    return res.status(200).json({
        status: 200,
        message: "Student deleted successfully..",
        error: false
    });
});

app.patch('/updateStudent', (req, res) => {

    // update logic

    return res.status(200).json({
        status: 200,
        message: "Student updated successfully..",
        error: false
    });
});


app.get('/singleStudent', (req, res) => {

    // Single Fetch logic

    return res.status(200).json({
        status: 200,
        message: "Student fetched successfully..",
        error: false
    });
});

app.listen(PORT, (error) => {
    if (error) {
        console.log("Error : ", error);
        return;
    }
    console.log("Server is started...");
});