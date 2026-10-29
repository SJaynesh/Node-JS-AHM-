// MongoDB Connect
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/RNW").then(() => {
    console.log("DB is connected..");
}).catch((error) => {
    console.log("DB is not connected..");
    console.log("Error : ", error);
});