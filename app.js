let btn = document.querySelectorAll(".btn");
let reset=document.querySelectorAll(".but")
let msg = document.querySelector("#msg")
let count = 0;
winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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
    b.disabled = true;
    count++;
    let p=checkWin();
    if(p){
        msg.innerText=`${b.innerText} won the match`
        btn.forEach((b)=>{
            b.disabled=true
        })
    }
  });
});


function checkWin() {
  for (let i=0;i<winPatterns.length;i++) {
    let [a, b, c] = winPatterns[i];
    if (
      btn[a].innerText === btn[b].innerText &&
      btn[b].innerText === btn[c].innerText &&
      btn[a].innerText != ""
    ) {
      return true;
    }
    return false
  }
}

reset.forEach(b=> b.addEventListener("click", ()=>{
    count=0
    btn.forEach((b)=>{
        b.innerText=""
        b.disabled=false
        turn0=true
    })

}))