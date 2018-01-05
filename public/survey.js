//click event listener for submit button
console.log("script is running");

    //get value of name input 
    //use id = name
    // $("#name").val("");
    
    // //get value of photo input
    // //use id = photo
    // $("#photo").val("");
    
$("#myBtn").on("click", function () {
    event.preventDefault();
    console.log("button click");
    //12 make values into object to post
    var friend = {
        name: $("#name").val().trim(),
        photoURL: $("#photo").val().trim(),
        surveyResponses: [     //put survey here?
        //     $("#q1").val().trim(),
        //     $("#q2").val().trim(),
        //     $("#q3").val().trim(),
        //     $("#q4").val().trim(),
        //     $("#q5").val().trim(),
        //     $("#q6").val().trim(),
        //     $("#q7").val().trim(),
        //     $("#q8").val().trim(),
        //     $("#q9").val().trim(),
        //     $("#q10").val().trim()
    ]
};

// $("button").click(function(){
//     $("li").each(function(){
//         alert($(this).text())
//     });
// });
    $(".chosen-select").each(function() {

        friend.surveyResponses.push($(this).val().trim());
        console.log($(this));
    });
    console.log(friend.surveyResponses);

    //get value of survey inputs
    //use i
    //use jquery.each to loop through select inputs

    //push to array


});




//use ajax

// $.post("/api/friends", friend).done(function(data) {
//     $("#");   //location to post? Modal?
//     $("#");   //attr it for source of photo
// });