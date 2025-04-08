function convertTemp() {
  const temp = parseFloat(document.getElementById("inputTemp").value);
  const unit = document.getElementById("inputUnit").value;
  const resultBox = document.getElementById("resultBox");

  if (isNaN(temp)) {
    resultBox.innerText = "Please enter a valid number.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (unit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === "fahrenheit") {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = (temp - 32) * 5/9 + 273.15;
  } else if (unit === "kelvin") {
    celsius = temp - 273.15;
    fahrenheit = (temp - 273.15) * 9/5 + 32;
    kelvin = temp;
  }

  resultBox.innerHTML = `
    <p><strong>Celsius:</strong> ${celsius.toFixed(2)} °C</p>
    <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
    <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
  `;
}
