$(document).ready(function () {
    // localStorage.empty();

    // Using moment to get todays date; month, day, and year
    let todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(todaysDate);

    // Getting current time for color coding
    let currentTime = moment().format("HH:mm");
    console.log(currentTime);

    timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

    // for loop that creates rows in schedule for time
    for (let i = 0; i < timeArray.length; i++) {
        // Creates section for schedule
        let rowEl = $('<div>').addClass("row time");

        // getting correct time value for all times
        let hourArray = timeArray[i].split(" ");
        let hour = hourArray[0];
        let newTime = hour;
        if (hour < 6) {
            newTime = parseInt(hour) + 12;
        }
        console.log(newTime);
       

        // Creates column with time
        let columnTime = $('<div>').addClass("col-2 hour time-block").data("value", newTime);
        // Creates column with input
        let columnInput = $('<textarea>').addClass("col-8 columnInput");
        // Creates button to save input
        let saveButton = $('<button>').addClass("col-2 saveBtn i:hover");
        saveButton.html('<i class="fa fa-save"></i>');

        $("div.container").append(rowEl);
        rowEl.append(columnTime, columnInput, saveButton);


        columnTime.text(timeArray[i]);

    };

    // applying right class for colors
    function fctClass() {
        console.log(moment().hour());
        $(".time-block").each(function() {
            
            let textArea = $(this).siblings(".columnInput");
            let textAreaHour = $(this).data("value");
            if (textAreaHour < moment().hour()) {
                console.log("Past");
                textArea.addClass("past");
            }
            if (textAreaHour == moment().hour()) {
                console.log("present");
                textArea.addClass("present");
            }
            if (textAreaHour > moment().hour()) {
                console.log("future");
                textArea.addClass("future");
            }
        });
    }
    fctClass();

    // sets empty array
    let textInputArray = [];

    // storing input into local storage
    // xt(textInputArray[i].text);
    //         console.log(textInputArray[i].text);

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
            $(".textarea").te
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