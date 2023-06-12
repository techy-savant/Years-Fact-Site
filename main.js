let boxes = document.querySelector('.boxes');
let numberInputs = document.querySelectorAll('.numberInput');


let output = document.createElement('p'); // create output element
output.classList.add('box');

// Add event listeners to each number input
numberInputs.forEach((numberInput, index) => {
  numberInput.addEventListener('input', getFactFetch);

  async function getFactFetch(e) {
    let number = e.target;
    if (isNaN(number.value) || number.value < 0) {
      number.value = 1;
    }
    number = number.value;
  
    if (number && index < numberInputs.length - 1) {
      numberInputs[index + 1].focus();
    }
  
    if (index === numberInputs.length - 1 && number) {
      const concatenatedValue = Array.from(numberInputs)
        .map((input) => input.value)
        .join('');
  
      try {
        const response = await fetch(`http://numbersapi.com/${concatenatedValue}/year`);
        const data = await response.text();
  
        if (number !== '') {
          output.textContent = data;
          boxes.appendChild(output);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
      
});