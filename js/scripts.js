"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM READY");
  const moodForm = document.querySelector("#moodRing");
  const myMood = document.querySelector("#myMood");

  moodForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const moodInput = moodForm.querySelector("input[name=mood]:checked");
    myMood.innerText = moodInput.value;

    switch (moodInput.value) {
      case "Very Happy":
        toggleClass(myMood, "very-happy-mood", [
          "fine-mood",
          "pissed-the-fuck-off-mood",
        ]);
        break;
      case "Fine":
        toggleClass(myMood, "fine-mood", [
          "very-happy-mood",
          "pissed-the-fuck-off-mood",
        ]);
        break;
      case "Pissed the fuck off":
        toggleClass(myMood, "pissed-the-fuck-off-mood", [
          "very-happy-mood",
          "fine-mood",
        ]);
        break;
      default:
        break;
    }
  });
});

function toggleClass(element, className, classesToRemove) {
  console.log(element, className, classesToRemove);
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }

  if (classesToRemove.length > 0) {
    classesToRemove.forEach(function (className) {
      if (element.classList.contains(className)) {
        element.classList.remove(className);
      }
    });
  }
}
