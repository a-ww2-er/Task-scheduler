const m = ["January", "febuary", "march", "april", "may"];
const d = new Date();
let month = m[d.getMonth()];
const workTask = document.getElementById("work");
const gymTask = document.getElementById("gym");
const schoolTask = document.getElementById("school");
const studyTask = document.getElementById("study");
const eventTask = document.getElementById("event");
const leisureTask = document.getElementById("leisure");
const unSelectBtn = document.getElementById("unselect");
const date = document.getElementById("month");
const taskContainer = document.querySelector(".task_container");
const scheduleContainer = document.querySelector(".schedule_container");
const resetBtn = document.querySelector(".buttonstyle");
const Popup = document.querySelector(".pop-up_container");
const noBtn = document.getElementById("btn_no");
const yesBtn = document.getElementById("btn_yes");
const addTask = document.getElementById("add_day");
const tcontainer = document.querySelector(".container");

//global variables
let selectedColor,
  active = false,
  text,
  dayfunc = 1;

//date
date.innerHTML = `This ${month} schedule`;

//Event listeners
taskContainer.addEventListener("click", selectTask);
scheduleContainer.addEventListener("click", setColors);
unSelectBtn.addEventListener("click", unSelectTasks);
resetBtn.addEventListener("click", openPopup);
noBtn.addEventListener("click", closePopup);
yesBtn.addEventListener("click", deleteTasks);
addTask.addEventListener("click", addDay);

//task click
function selectTask(e) {
  unSelectTasks();
  switch (e.target.id) {
    case "work":
      taskColor = getComputedStyle(workTask).backgroundColor;
      tasktext = workTask.innerHTML;
      activeTask(workTask, taskColor, tasktext);
      icon = '<i class = "fas fa-briefcase"></i>';
      break;
    case "gym":
      taskColor = getComputedStyle(gymTask).backgroundColor;
      tasktext = gymTask.innerHTML;
      activeTask(gymTask, taskColor, tasktext);
      icon = '<i class = "fas fa-dumbbell"></i>';
      break;
    case "school":
      taskColor = getComputedStyle(schoolTask).backgroundColor;
      tasktext = schoolTask.innerHTML;
      activeTask(schoolTask, taskColor, tasktext);
      icon = '<i class = "fas fa-school"></i>';
      break;
    case "event":
      taskColor = getComputedStyle(eventTask).backgroundColor;
      tasktext = eventTask.innerHTML;
      activeTask(eventTask, taskColor, tasktext);
      icon = '<i class = "fas fa-building"></i>';
      break;
    case "study":
      taskColor = getComputedStyle(studyTask).backgroundColor;
      tasktext = studyTask.innerHTML;
      activeTask(studyTask, taskColor, tasktext);
      icon = '<i class = "fas fa-book"></i>';
      break;
    case "leisure":
      taskColor = getComputedStyle(leisureTask).backgroundColor;
      tasktext = leisureTask.innerHTML;
      activeTask(leisureTask, taskColor, tasktext);
      icon = '<i class = "fas fa-leaf"></i>';
      break;
  }
}
//set colors for schdule
function setColors(e) {
  const extraTab = document.querySelectorAll(".extra_tab");
  const task = e.target;
  console.log(task);
  if (task.classList.contains("task") && active === true) {
    task.style.backgroundColor = selectedColor;
    task.innerHTML = `${icon}<textarea placeholder=" Write A Task" id="textfield" cols="11" rows="5"></textarea>`;
    task.nextElementSibling.style.backgroundColor = selectedColor;
    task.nextElementSibling.innerHTML = text;
  }
}
//this will select  a task
function activeTask(task, color, taskname) {
  task.classList.toggle("selected");
  if (task.classList.contains("selected")) {
    active = true;
    selectedColor = color;
    text = taskname;
    return selectedColor, text;
  } else {
    active = false;
  }
}

// this will reset task
function unSelectTasks() {
  const allTasks = document.querySelectorAll(".task_name");
  active = false;
  allTasks.forEach((item) => {
    item.className = "task_name";
  });
}

//delete tasks
function deleteTasks() {
  const tasks = document.querySelectorAll(".task");
  const extraTab = document.querySelectorAll(".extra_tab");

  tasks.forEach((items) => {
    items.innerHTML = "Free";
    items.style.backgroundColor = "white";
  });
  extraTab.forEach((items) => {
    items.innerHTML = "";
    items.style.backgroundColor = "white";
  });

  Popup.style.display = "none";
}

//open pop-up
function openPopup() {
  Popup.style.display = "flex";
}

//close pop-up
function closePopup() {
  Popup.style.display = "none";
}

//add a new task schedule day
function addDay() {
  dayfunc += 1;
  let dayContainer = document.createElement("div");
  let Day = document.createElement("span");

  dayContainer.className = "day_container";
  scheduleContainer.appendChild(dayContainer);

  Day.classList.toggle("day");
  Day.innerHTML = dayfunc;
  dayContainer.appendChild(Day);

  let tasks = ["task", "task2", "task3", "task4", "task5", "task6", "task7"];
  tasks.forEach((item) => {
    item = document.createElement("div");
    item.className = "task_body";
    item.innerHTML =
      '<div class="task">Free</div><div class="extra_tab"></div>';
    dayContainer.appendChild(item);
  });
  //   let time = ['time1', 'time2', 'time3', 'time4', 'time5', 'time6', 'time7'];
  //  time.forEach((item) =>{
  //      item = document.createElement("div");
  //      item.innerHTML= '3.4'
  //      item.classList.toggle('time');
  //     timeContainer.appendChild(item);
  //    }) ;
}
