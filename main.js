let alllis = document.querySelectorAll(".pricing .container .box");

alllis.forEach(function (ele) {
  ele.onclick = function () {
    alllis.forEach(function (ele) {
      ele.classList.remove("popular");
    });
    this.classList.add("popular");
  };
});
//*******************************************
let numbers = document.querySelectorAll(".stats .container .box .number");
let sectionCounter = document.querySelector(".stats");
let startCounter = false;

window.onscroll = function () {
  // if (window.scrollY >= sectionCounter.offsetTop - 10) {
  //   if (!startCounter) {
  //     numbers.forEach((num) => startCount(num));
  //   }
  //   startCounter = true;
  // }
};
function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
//*******************************
let section = document.querySelector(".our-skills");
let span = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 100) {
    span.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
  if (window.scrollY >= sectionCounter.offsetTop - 10) {
    if (!startCounter) {
      numbers.forEach((num) => startCount(num));
    }
    startCounter = true;
  }
};
