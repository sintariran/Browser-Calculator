function press(button, value) {
    button.classList.add('pressed');
    const equation = document.getElementById('equation');
    const result = document.getElementById('result');

    if (value === '=') {
        calculate();
    } else if (value === 'C') {
        clearDisplay();
    } else {
        equation.textContent += value;
        if (equation.textContent !== '') {
            result.textContent = eval(equation.textContent);
        } else {
            result.textContent = '';
        }
    }

    setTimeout(() => {
        button.classList.remove('pressed');
    }, 100);
}

function calculate() {
    const equation = document.getElementById('equation');
    const result = document.getElementById('result');
    if (equation.textContent !== '') {
        try {
            result.textContent = eval(equation.textContent);
        } catch (error) {
            result.textContent = 'Error';
        }
    } else {
        result.textContent = '';
    }
}

function clearDisplay() {
    const equation = document.getElementById('equation');
    const result = document.getElementById('result');
    equation.textContent = '';
    result.textContent = '';
}