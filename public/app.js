/*const productButton1 = document.querySelector("#productButton1");
const payment1 = document.querySelector(".payment");
const close1 = document.querySelector(".close");

productButton1.addEventListener("click", () => {
  payment1.style.display = "flex";
});

close1.addEventListener("click", () => {
  payment1.style.display = "none";
});

const productButton2 = document.querySelector("#productButton2");
const payment2 = document.querySelector(".payment");
const close2 = document.querySelector(".close");

productButton2.addEventListener("click", () => {
  payment2.style.display = "flex";
});

close2.addEventListener("click", () => {
  payment2.style.display = "none";
});

const productButton3 = document.querySelector("#productButton3");
const payment3 = document.querySelector(".payment");
const close3 = document.querySelector(".close");

productButton3.addEventListener("click", () => {
  payment3.style.display = "flex";
});

close3.addEventListener("click", () => {
  payment3.style.display = "none";
});*/

/*hidding my bitcoin/cash app*/
function hidebitcoin() {
  const bitcoin = document.querySelector("#bitcoin");
  const cashapp = document.querySelector("#cashapp");

  bitcoin.style.display = "none";
  cashapp.style.display = "flex";
}

function hidecashapp() {
  const bitcoin = document.querySelector("#bitcoin");
  const cashapp = document.querySelector("#cashapp");

  cashapp.style.display = "none";
  bitcoin.style.display = "flex";
}

/*sender*/

// Initialize an empty JavaScript object

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

const btn1 = document.getElementById("productButton1");
const btn2 = document.getElementById("productButton2");
const btn3 = document.getElementById("productButton3");


btn1.addEventListener("click", () => {
localStorage.setItem("a", p1.innerHTML);
console.log(p1.innerHTML);
});
