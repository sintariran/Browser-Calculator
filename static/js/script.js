const buttons = document.querySelectorAll('.btn');
const equationDisplay = document.getElementById('equation');
const resultDisplay = document.getElementById('result');

let equation = '';

function appendToEquation(value) {
    console.log('Appending value:', value);
    equation += value;
    equationDisplay.textContent = equation;
}

function clearDisplay() {
    equation = '';
    equationDisplay.textContent = '';
    resultDisplay.textContent = '0';
}

function calculateResult() {
    try {
        const result = eval(equation);
        resultDisplay.textContent = result;
        equation = result.toString();
    } catch (error) {
        resultDisplay.textContent = 'Error';
        equation = '';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('data-value');
        console.log('Button value:', buttonValue);

        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else {
            appendToEquation(buttonValue);
        }
    });
});