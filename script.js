var currentDay = $("#currentDay");
console.log(currentDay);
var date = dayjs().format("dddd DD MMMM YYYY");
var hour = dayjs().format("H");
console.log(date);
currentDay.text(date);

let startHour = 9;
let endHour = 17;

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
  amOrPm = "am";
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
  clickMe.text("Click me to set task!");
  clickMe.attr("class", "mx-auto my-auto");
  //append elements
  hourBlock.append(time);
  hourBlock.append(clickMe);
  container.append(hourBlock);
}
