$(document).ready(function () {
    // localStorage.empty();

    // Using moment to get todays date; month, day, and year
    let todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(todaysDate);


    // // sets empty object
    // let textInput = {
    //     9: "",
    //     10: "",
    //     11: "",
    //     12: "",
    //     13: "",
    //     14: "",
    //     15: "",
    //     16: "",
    //     17: "",
    // };
  

    // sets time array
    timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
    

    // for loop that creates rows in schedule for time
    for (let i = 0; i < timeArray.length; i++) {
        // Creates section for schedule
        let rowEl = $('<div>').addClass("row time");

        // getting correct time value for all times
        let hourArray = timeArray[i].split(" ");
        let hour = hourArray[0];
        let newTime = hour;
        
        // console.log(textInput);
        if (hour < 6) {
            newTime = parseInt(hour) + 12;
        }
       

        // Creates column with time
        let columnTime = $('<div>').addClass("col-2 hour time-block ").data("value", newTime);
        // Creates column with input
        let columnInput = $('<textarea>').addClass("col-8 columnInput "+ newTime);
        // Creates button to save input
        let saveButton = $('<button>').addClass("col-2 saveBtn i:hover");
        saveButton.html('<i class="fa fa-save"></i>');

        // adds HTML to the page
        $("div.container").append(rowEl);
        rowEl.append(columnTime, columnInput, saveButton);


        // adds correct times from my timeArray to the screen
        columnTime.text(timeArray[i]);

    };

    // applying right class for colors based on past, current, and future times
    function fctClass() {
        // console.log(moment().hour());
        $(".time-block").each(function () {

            let textArea = $(this).siblings(".columnInput");
            let textAreaHour = $(this).data("value");
            if (textAreaHour < moment().hour()) {
                textArea.addClass("past");
            }
            if (textAreaHour == moment().hour()) {
                textArea.addClass("present");
            }
            if (textAreaHour > moment().hour()) {
                textArea.addClass("future");
            }
        });
    }
    // calling my function to create correct colors in text area
    fctClass();



    // event listener on save button
    $(".saveBtn").on("click", function (event) {
        // console.log("save");
        let taskObj = {};

        $(".columnInput").each(function(currentIndex, currentEl) {
            console.log(currentIndex);
            console.log(currentEl);

            let input = $(currentEl);

            // let taskObj = {"data-time", "tasks"};
            taskObj.currentIndex = $(".columnInput").val().trim()
            // console.log(textInput);
        });
        
        
        // console.log(textArea);
        storeLS(taskObj);
        
      
    });

    function storeLS(tasks) {
        localStorage.setItem("dailyPlan", JSON.stringify(tasks));
        // textInputArray = JSON.parse(localStorage.getItem("planner"));
        // let dailyPlan = $(".columnInput").val();
        // let text = { dailyPlan };

        // if (!textInputArray) {
        //     textInputArray = [];
        // }
        // textInputArray.push(text);
        // localStorage.setItem("planner", JSON.stringify(textInputArray));
        // console.log(textInputArray);
        // console.log(dailyPlan);
    }
    // loads dailyPlan from local storage and displays on screen
    function loadLS() {
        const storedPlan = JSON.parse(localStorage.getItem("dailyPlan"));
        if (storedPlan) {
            storedPlan = textInput;
        }
        //     textInputArray = localStorage.getItem("planner");
        //     if (!textInputArray) {
        //         textInputArray = [];
        //     }
        //     else {
        //         textInput = JSON.parse(textInputArray);
        //     }

        //     // loops through textInputArray and displays daily plans on page
        //     for (let i = 0; i < textInputArray.length; i++) {
        //         $(".textarea").te
        //     }

        // console.log(textInput);
    }

    //    // store text input into object when save button clicked
    //    // locate value and save into variable
    //    // save info into object in key value pair
    //     storeLS();
    //     // loadLS(); don't do this every time


});