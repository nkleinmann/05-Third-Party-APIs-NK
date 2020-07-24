$(document).ready(function () {
    // localStorage.empty();

    // Using moment to get todays date; month, day, and year
    let todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(todaysDate);
    // // Creates section for schedule
    // let rowEl = $('<div>').addClass("row time");
    // // Creates column with time
    // let columnTime = $('<div>').addClass("col-2 hour time-block");
    // // Creates column with input
    // let columnInput = $('<div>').addClass("col-8 columnInput");
    // // Creates button to save input
    // let saveButton = $('<button>').addClass("col-2 saveBtn i:hover");
    // saveButton.html('<i class="fa fa-save"></i>');

    timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

    // for loop that creates rows in schedule for AM time
    for (let i = 0; i < timeArray.length; i++) {
        // Creates section for schedule
        let rowEl = $('<div>').addClass("row time");
        // Creates column with time
        let columnTime = $('<div>').addClass("col-2 hour time-block");
        // Creates column with input
        let columnInput = $('<textarea>').addClass("col-8 columnInput bg-light");
        // Creates button to save input
        let saveButton = $('<button>').addClass("col-2 saveBtn i:hover");
        saveButton.html('<i class="fa fa-save"></i>');

        $("div.container").append(rowEl);
        rowEl.append(columnTime, columnInput, saveButton);


        columnTime.text(timeArray[i]);

    };

    // sets empty array
    let textInputArray = [];

    // storing input into local storage
    function storeLS() {
        textInputArray = JSON.parse(localStorage.getItem("planner"));
        let dailyPlan = $(".columnInput").val();
        let text = { dailyPlan };

        if (!textInputArray) {
            textInputArray = [];
        }
        textInputArray.push(text);
        localStorage.setItem("planner", JSON.stringify(textInputArray));
        console.log(textInputArray);
        console.log(dailyPlan);
    }
    // loads dailyPlan from local storage and displays on screen
    function loadLS() {
        textInputArray = localStorage.getItem("planner");
        if (!textInputArray) {
            textInputArray = [];
        }
        else {
            textInput = JSON.parse(textInputArray);
        }

        // loops through textInputArray and displays daily plans on page
        for (let i = 0; i < textInputArray.length; i++) {
            $(".textarea").text(textInputArray[i].text);
            console.log(textInputArray[i].text);


        }
        
        console.log(textInputArray);
    }

    // event listener on save button
    $(".saveBtn").on("click", function () {
        // event.preventDefault();
        storeLS();
        loadLS();
    })




});