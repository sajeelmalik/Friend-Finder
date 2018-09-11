//Sajeel Malik

//HTML Server get routes 

//import path to correctly direct to our HTML files
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("/:anything", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

}