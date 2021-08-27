let count = 0;
let prev = document.querySelector(".prevBtn");
let next = document.querySelector(".nextBtn");
let counter = document.querySelector("#counter");

function checkValue() {
  if (count> 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "#333333";
  }
}
prev.addEventListener("click", function () {
  count--;
  checkValue();
  counter.innerHTML = count;
});
next.addEventListener("click", function () {
  count++;
  checkValue();
  counter.innerHTML = count;
});
