$(document).ready(function() {

    // Using moment to get todays date; month, day, and year
    let todaysDate = moment().format('MMMM Do YYYY');;
    console.log(todaysDate);
    $("#currentDay").text(todaysDate);

});