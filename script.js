const api_url = "https://api.adviceslip.com/advice";
const dice = document.getElementById("dice");
const advice_text = document.getElementById("advice");
const advice_no = document.getElementById("advice-no");

// async function getAdvice(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   showAdvice(data.slip);
// }

// function showAdvice(data) {
//   const { id, advice } = data;
//   advice_no.innerText = `ADVICE #${id}`;
//   console.log(advice);
//   advice_text.innerText = advice;
//   console.log(id, advice);
// }

// dice.addEventListener("click", () => {
//   getAdvice(api_url);
// });
