const mongoose = require('mongoose');

const MongoURL = "mongodb://localhost:27017/RNW";

mongoose.connect(MongoURL).then(
    () => {
        console.log("DB is connected...");
    }
).catch((error) => {
    console.log("DB is not connected...");
    console.log("Error : ", error);
});