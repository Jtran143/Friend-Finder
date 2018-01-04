//click event listener for submit button

    //get value of name input 
    //use id = name
    $("#name").val("");
    
    //get value of photo input
    //use id = photo
    $("#photo").val("");
    
$(".submit").on("click", function () {
    event.preventDefault();

    //12 make values into object to post
    var friend = {
        name: $("#name").val().trim(),
        photoURL: $("#photo").val().trim(),
        surveyResponses: [     //put survey here?
            $("#q1").val().trim(),
            $("#q2").val().trim(),
            $("#q3").val().trim(),
            $("#q4").val().trim(),
            $("#q5").val().trim(),
            $("#q6").val().trim(),
            $("#q7").val().trim(),
            $("#q8").val().trim(),
            $("#q9").val().trim(),
            $("#q10").val().trim()
    ]
};


    //get value of survey inputs
    //use i
    //use jquery.each to loop through select inputs

    //push to array
    
    function survey () {
        var survey = [];
        for (i = 1; i <= 10; i++) {
            var ans = $("#q").val().trim();  //is this right?

            survey.push(ans);
        }
        return survey;
    }

});




//use ajax

$.post("/api/friends", friend).done(function(data) {
    $("#");   //location to post? Modal?
    $("#");   //attr it for source of photo
});