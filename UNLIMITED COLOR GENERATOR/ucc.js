function colorCode() {
  return Math.floor(Math.random() * (255 - 1 + 1));
}
function colorChanger() {
  let rgb = `rgb(${colorCode()},${colorCode()},${colorCode()})`;
  return rgb;
}

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const refrencebg = function bgColorChanger() {
  document.body.style.backgroundColor = colorChanger();
};
let startEvent;

start.addEventListener("click", function () {
  startEvent = setInterval(refrencebg, 50);
});
stop.addEventListener("click", function () {
  clearInterval(startEvent);

});
