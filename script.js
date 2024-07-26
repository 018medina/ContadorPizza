let pizzaCounter = localStorage.getItem("pizzaCount")
  ? parseInt(localStorage.getItem("pizzaCount"))
  : 0;
const pizzaImage = document.getElementById("pizzaImage");
const pizzaCounterDisplay = document.getElementById("pizzaCounter");
pizzaCounterDisplay.textContent = pizzaCounter;
updatepizzaImage();

function incrementCounter() {
  pizzaCounter++;
  pizzaCounterDisplay.textContent = pizzaCounter;
  updatepizzaImage();
}

function decrementCounter() {
  if (pizzaCounter !== 0) {
    pizzaCounter--;
    pizzaCounterDisplay.textContent = pizzaCounter;
    updatepizzaImage();
  }
}

function updatepizzaImage() {
  if (pizzaCounter < 10) {
    pizzaImage.src = "pizza1.png";
  } else if (pizzaCounter < 20) {
    pizzaImage.src = "pizza2.png";
  } else if (pizzaCounter < 30) {
    pizzaImage.src = "pizza3.png";
  } else {
    pizzaImage.src = "pizza4.png";
  }

  localStorage.setItem("pizzaCount", pizzaCounter);
}

function zeroCounter() {
  pizzaCounter = 0;
  pizzaCounterDisplay.textContent = pizzaCounter;
  updatepizzaImage();
}
