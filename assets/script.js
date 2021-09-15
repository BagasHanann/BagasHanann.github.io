function calculator() {
  const button = document.querySelector('.button');
  button.addEventListener('click', function() {
    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');

    if (inputValidation(input1, input2)) {
      const operator = document.querySelector('.operator');

      const num1 = parseInt(input1.value);
      const num2 = parseInt(input2.value);

      const result = document.querySelector('.box-result span');
      result.textContent = operatorValidation(operator, num1, num2);
    }
  });
}

calculator();

function operatorValidation(operator, input1, input2) {
  let result = '';

  switch (operator.value) {
    case 'tambah':
      result += input1 + input2;
      break;
    case 'kurang':
      result += input1 - input2;
      break;
    case 'kali':
      result += input1 * input2;
      break;
    case 'bagi':
      result += input1 / input2;
      break;
    default:
      result += 'error!!!';
  }

  return result;
}

function popupAlert(icon, text, btnText) {
  swal.fire({
    icon: `${icon}`,
    text: `${text}`,
    confirmButtonText: `${btnText}`
  });
}

function inputValidation(input1, input2) {
  return (!input1.value || !input2.value) ? popupAlert('error', 'input is required!', 'OK') : true;
}