$(document).ready(function () {
    // localStorage.empty();
    // restart();
    loadLs();

    // Using moment to get todays date; month, day, and year
    let todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(todaysDate);  

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
        let taskObj = [];

        $(".columnInput").each(function(currentIndex, currentEl) {
            taskObj[currentIndex] = $(currentEl).val().trim(); // adds key value pairs to object
        });
        
        
        console.log(taskObj);
        localStorage.setItem("dailyPlan", JSON.stringify(taskObj));
        
      
    });


    // loads dailyPlan from local storage and displays on screen
    function loadLs() {
        for (let i = 0; i < 10; i++) {
            let storedPlan = JSON.parse(localStorage.getItem("dailyPlan"));  
            $(".columnInput " + (i+8)).text(storedPlan[i]);
        }
        // let storedPlan = JSON.parse(localStorage.getItem("dailyPlan"));
        // if (storedPlan) {
        //     $(".columnInput").val(currentIndex.currentEl);
        // }
    }

    
    
    // }


//     function restart(taskObj) {
//         let storedTasks = JSON.parse(localStorage.getItem(taskObj));
//         if (storedTasks !== null) {
//             $(".columnInput").each(function(currentIndex, currentEl) {
//                  $(currentEl).append(taskObj[currentIndex]).val();
//                  console.log(currentIndex);
//                  console.log(currentEl);
//         });
//     }
// }
          


});