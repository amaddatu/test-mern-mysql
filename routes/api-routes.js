// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/testdb", (req, res) => {
        //   // Create an object containing dummy data to save to the database
        // var data = {
        //   array: ["item1", "item2", "item3"],
        //   boolean: false,
        //   string:
        //     "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
        //   number: 42
        // };
        
        // // Save a new Example using the data object
        // Example.create(data)
        //   .then(function(dbExample) {
        //     // If saved successfully, print the new Example document to the console
        //     console.log(dbExample);
        //     res.json(dbExample);
        //   })
        //   .catch(function(err) {
        //     // If an error occurs, log the error message
        //     console.log(err.message);
        //     res.json({error: "you made a boo boo"});
        //   });
        db.User.findAll({})
        .then( dbUsers => {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbUsers);
        })
        .catch( error => {
            res.json({
                error: "Error getting users"
            });
            console.log(error);
        });
        ;
    });
    app.post("/api/user", (req, res) => {
        res.json({
            test: "test"
        });
    });
};