$(document).ready(function() {

    // Using moment to get todays date; month, day, and year
    let todaysDate = moment().format('MMMM Do YYYY');;
    console.log(todaysDate);
    $("#currentDay").text(todaysDate);




    for (let i = 9; i < 10; i++) {
            // Creates section for schedule
    const rowEl = $('<div>').addClass("row time");
    // Creates column with time
    const columnTime = $('<div>').addClass("col-2 hour");
    // Creates column with input
    const columnInput = $('<div>').addClass("col-8 columnInput");
    // // Creates column with font awesome
    // const columnFA = $("<div></div>").addClass("col-2 columnFA");
    // Creates button to save input
    const saveButton = $('<button>').addClass("col-2 saveBtn i:hover");
    saveButton.html('<i class="fa fa-save"></i>');

        $("div.container").append(rowEl);
        rowEl.append(columnTime, columnInput, saveButton);

        columnTime.text(i + "AM");
        
    }


});