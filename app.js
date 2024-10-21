let btn = document.querySelectorAll(".btn");
let msg = document.querySelector("#msg");
let reset = document.querySelector(".but");

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let count = 0;
let turn0 = true;

btn.forEach((b) => {
  b.addEventListener("click", () => {
    if (turn0) {
      b.innerText = "0";
      turn0 = false;
    } else {
      b.innerText = "X";
      turn0 = true;
    }
    count++;
    b.disabled = true;

    winPatterns.forEach((pattern) => {
      if (
        btn[pattern[0]].innerText === btn[pattern[1]].innerText &&
        btn[pattern[1]].innerText === btn[pattern[2]].innerText &&
        btn[pattern[0]].innerText != ""
      ) {
        msg.innerText = `${btn[pattern[0]].innerText} won the match`;
        
        btn.forEach((b) => {
          b.disabled = true;
        });
      }
    });
  });
});

reset.addEventListener("click", () => {
  count = 0;
  btn.forEach((b) => {
    b.innerText = "";
    msg.innerText = "";

    b.disabled = false;
    turn0 = true;
  });
});
