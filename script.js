document.addEventListener("DOMContentLoaded", onReady);

function onReady(){

  /* -------------------------- 1 -------------------------------- */  
  const concatenateInputField1 = document.getElementById('concatenate-input-field-1');
  const concatenateInputField2 = document.getElementById('concatenate-input-field-2');
  const concatenateInputField3 = document.getElementById('concatenate-input-field-3');
  const concatenateButtonSubmit = document.getElementById('concatenate-form-button');
  

  concatenateButtonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const concatenateOutputField1 = concatenateInputField1.value;
    const concatenateOutputField2 = concatenateInputField2.value;
    const concatenateOutputField3 = concatenateInputField3.value;

    const concatenateOutputStrings = [concatenateOutputField1, concatenateOutputField2, concatenateOutputField3];
    concatenateOutputStrings.sort(() => {return 0.5 - Math.random()});
    const outputResult = concatenateOutputStrings.join(' ');
    
    const concatenateOutputResult = document.querySelector('.concatenate-output');
    concatenateOutputResult.innerHTML = 'Результат конкатенації: ' + outputResult;

    });

    /* -------------------------- 2 -------------------------------- */
    const digitInputField1 = document.getElementById('digit-input-field-1');
    const digitButtonSubmit = document.getElementById('digit-form-button');
    const digitOutputResult = document.querySelector('.digit-output');

    digitButtonSubmit.addEventListener('click', (e) => {
       e.preventDefault();
       const digitOutputField1 = digitInputField1.value;
       if(digitOutputField1 === '' || digitOutputField1.toString().length !== 5){
          digitOutputResult.innerHTML = '5-тизначне число відсутнє';
       }
       else{
        const digitResultList = digitOutputField1.toString().split('').map(Number);
        digitOutputResult.innerHTML = 'Результат розбиття: ' + digitResultList;
       }
    });
}