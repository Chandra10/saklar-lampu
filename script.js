function saklar(id) {
  let lampu1 = document.getElementById("lampu1");

  if (id == "on") {
    lampu1.src = "img/on.gif";
  } else {
    lampu1.src = "img/off.gif";
  }
}
