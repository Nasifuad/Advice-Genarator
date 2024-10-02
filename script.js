const api_url = "https://api.adviceslip.com/advice";
const dice = document.getElementById("dice");
const advice_text = document.getElementById("advice");
const advice_no = document.getElementById("advice-no");
const advice_list = document.getElementById("advice-list");

async function getAdvice(url) {
  const res = await fetch(url);
  const data = await res.json();
  const { advice, id } = data.slip;
  advice_no.innerText = `ADVICE #${id}`;
  console.log(advice);
  advice_text.innerText = advice;

  const new_advice = document.createElement("div");
  new_advice.innerHTML = `
   <div class="advices">
        <h1 class="title">Advice #${id}</h1>
        <p class="advice">
          ${advice}
        </p>
      </div>`;

  advice_list.appendChild(new_advice);
}

dice.addEventListener("click", () => {
  getAdvice(api_url);
});
// getAdvice(api_url);
// async function getAdvice(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   showAdvice(data.slip);
// }

// function showAdvice(data) {
//   const { id, advice } = data;

//   console.log(id, advice);
// }

// dice.addEventListener("click", () => {
//   getAdvice(api_url);
// });
