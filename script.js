$(document).ready(function () {

    // Using moment to get todays date; month, day, and year
    let todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(todaysDate);
    // Creates section for schedule
    let rowEl = $('<div>').addClass("row time");
    // Creates column with time
    let columnTime = $('<div>').addClass("col-2 hour time-block");
    // Creates column with input
    let columnInput = $('<div>').addClass("col-8 columnInput");
    // Creates button to save input
    let saveButton = $('<button>').addClass("col-2 saveBtn i:hover");
    saveButton.html('<i class="fa fa-save"></i>');


    // for loop that creates rows in schedule for AM time
    for (let i = 0; i < 9; i++) {
        // Creates section for schedule
        rowEl = $('<div>').addClass("row time");
        // Creates column with time
        columnTime = $('<div>').addClass("col-2 hour time-block");
        // Creates column with input
        columnInput = $('<div>').addClass("col-8 columnInput");
        // Creates button to save input
        saveButton = $('<button>').addClass("col-2 saveBtn i:hover");
        saveButton.html('<i class="fa fa-save"></i>');

        $("div.container").append(rowEl);
        rowEl.append(columnTime, columnInput, saveButton);


        columnTime.text(i + "AM");

    };




});