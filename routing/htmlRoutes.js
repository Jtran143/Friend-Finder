var path = require("path");

module.exports = function(app) {
    //home route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //survey route
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/survey.js", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.js"));
    });
    //if no matching route thenm default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};
