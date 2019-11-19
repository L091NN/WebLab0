function Who() {
  var button = document.getElementById("who1");
  button.parentNode.removeChild(button);
  var where = document.getElementById("who");
  var who = document.createElement("label");
  var br = document.createElement("br");

  who.innerHTML = "<strong>Всем привет!</strong> Работу выполнил "
  if(ind > 2) who.innerHTML += "Марти мак Флай";
  else who.innerHTML += "Лугин Михаил";
  who.className = "alert";

  where.appendChild(br);
  where.appendChild(who);
}

var id = 0;
var ind = 0;
function ClickedButton1() {
  var element = document.getElementById("form1");
  var input = document.createElement("input");
  var br = document.createElement("br");

  input.id = id++;
  input.value = id.toString();

  element.appendChild(br);
  element.appendChild(input);
  if (ind < 3 )ind = 0;
}

function ClickedButton2() {
  var element = document.getElementById("form1");
  var button = document.createElement("button");
  var br = document.createElement("br");

  button.innerHTML = "Просто кнопка";
  button.id = id++;

  element.appendChild(br);
  element.appendChild(button);
  if (ind < 3 )ind = 0;
}

function ClickedButton3() {
  var element = document.getElementById("form1");
  var input = document.createElement("input");
  var label = document.createElement("label");
  var br = document.createElement("br");

  label.for = (id - 1).toString();
  label.innerHTML = document.getElementById("mainTextField").value;
  input.for = (id - 1).toString();
  input.type = "radio";

  element.appendChild(br);
  element.appendChild(input);
  element.appendChild(label);
  if (ind < 3 )ind = 0;
}

function ClickedButton4() {
  var element = document.getElementById("form1");
  var input = document.createElement("input");
  var br = document.createElement("br");

  input.type = "date";
  if (id % 3 == 0) {
    input.title = "distination time";
    input.value = "1985-10-26";
  }
  if (id % 3 == 1) {
    input.title = "present time";
    input.value = "2015-10-21";
  }
  if (id % 3 == 2) {
    input.title = "last time departed";
    input.value = "1955-11-12";
  }
  input.id = id++;

  element.appendChild(br);
  element.appendChild(input);
  ind++;
  if (ind == 3) document.getElementById("mainTextField").value = "OUT A TIME";
}
