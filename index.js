function disp(val) {
  document.getElementById("result").value += val;
}
function clr() {
  document.getElementById("result").value = " ";
}

function equals() {
  var x = document.getElementById("result").value;
  var y = eval(x);
  document.getElementById("result").value = y;
}
