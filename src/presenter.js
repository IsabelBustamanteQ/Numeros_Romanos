import numerosRomanos from "./numerosRomanos";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#numerosRomanos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
    div.innerHTML = "<p>" + numerosRomanos(firstNumber) + "</p>";
});
