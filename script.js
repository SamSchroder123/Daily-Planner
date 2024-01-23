var currentDay = $("#currentDay");
console.log(currentDay);
var date = dayjs().format("dddd DD MMMM YYYY");
var hour = dayjs().format("H");
console.log(date);
currentDay.text(date);

let startHour = 8;
let endHour = 20;

var difference = endHour - startHour;

var container = $(".container");
for (let i = startHour; i < endHour + 1; i++) {
  //create hour block div
  var hourBlock = $("<div>");
  var id = "hourBlock" + i;
  var classes = "d-flex hourBlock";
  hourBlock.attr("class", classes);
  //   console.log(hourBlock.attr("class"));
  hourBlock.attr("id", id);
  //create time p
  var time = $("<p>");
  time.attr("class", "my-0 py-2 px-2 border-end border-dark border-3");
  amOrPm = "AM";
  time.text(i + amOrPm);
  if (i > 12) {
    amOrPm = "PM";
    time.text(i - 12 + amOrPm);
  }
  //dynamically assign background color dependent on current time
  if (i < hour) {
    hourBlock.attr("class", classes + " bg-danger bg-gradient");
  } else if (i > hour) {
    hourBlock.attr("class", classes + " bg-success bg-gradient");
  } else {
    hourBlock.attr("class", classes + " bg-warning bg-gradient");
  }

  //create click me p
  var clickMe = $("<p>");
  var clickMeIdGlobal = "clickMe" + i;
  clickMe.text("Click anywhere on this hourblock to set a task!");
  clickMe.attr("class", "ms-auto my-auto");
  clickMe.attr("id", clickMeIdGlobal);

  //trigger createTask() when hourBlock is clicked
  hourBlock.click({ idParam: id, clickMeId: clickMeIdGlobal }, taskOverlay);
  //append elements
  hourBlock.append(time);
  hourBlock.append(clickMe);
  container.append(hourBlock);
}

function taskOverlay(paramObj) {
  var overlay = $("#overlay");
  var submitButton = $("#submit");
  submitButton.off("click");
  var id = paramObj.data.idParam;
  var clickMeId = paramObj.data.clickMeId;
  console.log("id" + id);
  console.log("clickMeId" + clickMeId);
  console.log(hourBlock);
  overlay.attr("class", "d-flex");
  submitButton.click({ idParam: id, clickMeId: clickMeId }, createTask);
}

function createTask(paramObj2) {
  console.log("paramObj2.data: " + JSON.stringify(paramObj2.data));
  console.log("paramObj2.data.idParam: " + paramObj2.data.clickMeId);
  //   var blockChoice = paramObj2.data.length;
  var hourBlock = $("#" + paramObj2.data.idParam);
  var task = $("#task");
  console.log(task.val());
  hourBlock.find("#" + paramObj2.data.clickMeId).text(task.val());
  var overlay = $("#overlay");
  overlay.attr("class", "d-none");
}
