var friends = require("../data/friends.js");
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });


    //A POST routes /api/friends. This will be used to handle incoming survey results. 

    //This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        var userData = req.body;
        // Math.abs(number); 

        //make variable for current best friend

        for (var i = 0; i < friendsList.length; i++) {
            var totalDifference = 0;

            for(var j = 0; j < friendsList[i].surveyResponse; j++) {
                var surveyDifference = Math.abs(friendsList[i].surveyResponse[j] - userData.surveyResponse[j]);
                totalDifference += surveyDifference;

                //each time outer loop runs want to compare
            }

        //compare the current total difference with the current best friend score, if score is lower
        //make current friend the new best friend

        }

        
    });

};


