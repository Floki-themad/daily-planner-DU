// declaring the buttons that i would like to be able to use as well as where to put the current date
let button = $(".btn");
let currentDay = $("#currentDay")

// creating an element of time
let time = moment();

// declaring an object for each task to get stored into based on the time value
let schedule = [
    {
        taskNumber: 9,
        taskValue: " ",

    },
    {
        taskNumber: 10,
        taskValue: " ",

    },
    {
        taskNumber: 11,
        taskValue: " ",
    },
    {
        taskNumber: 12,
        taskValue: " ",
    },
    {
        taskNumber: 1,
        taskValue: " ",
    },
    {
        taskNumber: 2,
        taskValue: " ",
    },
    {
        taskNumber: 3,
        taskValue: " ",
    },
    {
        taskNumber: 4,
        taskValue: " ",
    },
    {
        taskNumber: 5,
        taskValue: " ",
    },
]

// this function starts on page load
function init() {
    // this function gets the date and sets it to the current day part of the page
    getTime()

    // this function gets the current time of day and applies colors to each time slot depending on if it is the same, before, or after. 
    getColor()

    // this function takes the tasks stored in local storage and applies them to the corresponding4 textarea
    loadSave()
}


// this function gets the current date and applies a format to show on the page.
function getTime() {
    currentDay.text(time.format("dddd MMMM Do"))
}


// this function applies the color to each time block based on the current time of day. 
function getColor() {

    // this chunk of code sets each textarea to a uique variable
    let box9 = $("#task9")
    let box10 = $("#task10")
    let box11 = $("#task11")
    let box12 = $("#task12")
    let box1 = $("#task1")
    let box2 = $("#task2")
    let box3 = $("#task3")
    let box4 = $("#task4")
    let box5 = $("#task5")
}