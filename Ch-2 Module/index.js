/*
    Three Types of module :

    module => .js => function, class 

    1. Core Module (Built-in Module)
        http, os, fs, etc

    2. Local Module (User Defined Module)

    3. Third Party Module
        install
        express, mongoose, moment, bcypt, nodemon, nodemaile, jwt, etc...
*/
const { name, multiplication } = require("./math");


multiplication(25, 5)

console.log(name);
