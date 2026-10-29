const express = require('express');

require("./config/db.config");

const app = express();

const PORT = 8000;

// get(routeName, callBack(request, response))

// API => url return JSON data



function getCallBack(req, res) {
    console.log("callback is called..");

    const responseObj = {
        name: "Raj Kumar",
        age: 18,
        course: "Full Stack Development"
    };

    return res.status(200).json(responseObj);
}

app.get('/', getCallBack);

app.post('/view', (req, res) => {
    // console.log(req.url);
    // console.log(req.body);
    // console.log(req.query);
    // console.log(req.params);

    return res.status(201).json({ message: "Students fetched successfully.." })
});


app.listen(PORT, (error) => {
    if (error) {
        console.log("Server not started...", error);
        return;
    }
    console.log("Server is started...");
});