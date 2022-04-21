const button = document.querySelector("button");
let counterContainer = document.querySelector(".counter");
const inputsContainer = document.querySelector(".inputs");
let counting;


function pressButton() {

  counter = 0;

  inputsContainer.innerHTML = ``;

  counterContainer.innerHTML = `${counter}`

  button.innerHTML = `Release button`;


  counting = setInterval(() => {
    counter++;
    console.log(counter);
    counterContainer.innerHTML = `${counter}`;
  }, 1000);
}


function releaseButton() {
  button.innerHTML = `Press and hold to count`;
  clearInterval(counting);

  for (let i = 0; i < counter; i++) {
    inputsContainer.innerHTML += `<input type="text" value="Input ${i + 1}">`;
  }

}


button.addEventListener("mousedown", pressButton);
button.addEventListener("mouseup", releaseButton)