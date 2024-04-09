document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const displayTop = document.getElementById('displayTop');
    const botones = document.querySelectorAll('.buttons div'); // Obtener todos los botones dentro de '.buttons'

    let operando1 = null;
    let operando2 = null;
    let operacion = null;
    let firstOp = true;

    botones.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            // Verificar si el botón presionado es un número o un operador
            if (!isNaN(parseInt(buttonText))) {     // Si es un número, añadirlo al display
                if (display.textContent == "0" || !firstOp) {
                    display.textContent = buttonText;
                    firstOp = true;
                } else {
                    display.textContent += buttonText;
                }
            } else {    // Si es un operador, realizar la operación correspondiente
                switch (buttonText) {
                    case '+':
                        console.log("display.textContent op1: " + display.textContent);
                        operando1 = parseFloat(display.textContent);
                        console.log("operando1: " + operando1);
                        operacion = '+';
                        display.textContent = '';
                        displayTop.textContent = operando1 + " " + operacion;
                        break;
                    case '-':
                        operando1 = parseFloat(display.textContent);
                        operacion = '-';
                        display.textContent = '';
                        displayTop.textContent = operando1 + " " + operacion;
                        break;
                    case '/':
                        operando1 = parseFloat(display.textContent);
                        operacion = '/';
                        display.textContent = '';
                        displayTop.textContent = operando1 + " " + operacion;
                        break;
                    case 'X':
                        operando1 = parseFloat(display.textContent);
                        operacion = '*';
                        display.textContent = '';
                        displayTop.textContent = operando1 + " " + operacion;
                        break;
                    case '%':
                        operando1 = parseFloat(display.textContent);
                        operacion = '%';
                        display.textContent += buttonText;
                        firstOp = true;
                        break;
                    case ',':
                        let indicePorcentaje = display.textContent.indexOf(".");
                        if (indicePorcentaje === -1) {      // si en la cifra no hay una coma ya, la añado
                            display.textContent += '.';    
                        }
                        firstOp = true;
                        break;
                    case '=':
                        if (display.textContent !== "") {
                            firstOp = false;
                            let resultado = null;
                            operando2 = parseFloat(display.textContent);
                            switch (operacion) {
                                case '+':
                                    console.log("operando2: " + operando2);
                                    resultado = operando1 + operando2;
                                    displayTop.textContent += " " + operando2 + " =";
                                    break;
                                case '-':
                                    resultado = operando1 - operando2;
                                    displayTop.textContent += " " + operando2 + " =";
                                    break;
                                case '/':
                                    if (operando2 === 0) {
                                        resultado = "Error";
                                    } else {
                                        resultado = operando1 / operando2;
                                        displayTop.textContent += " " + operando2 + " =";
                                    }
                                    break;
                                case '*':
                                    resultado = operando1 * operando2;
                                    displayTop.textContent += " " + operando2 + " =";
                                    break;
                                case '%':
                                    let indicePorcentaje = display.textContent.indexOf("%");
                                    operando2 = parseFloat(display.textContent.substring(indicePorcentaje + 1));
                                    resultado = (operando1 * operando2) / 100;
                                    displayTop.textContent = display.textContent + " =";
                                    break;
                                default:
                                    console.log("No es ningun operador");
                                    resultado = "0";
                                    break;
                            }
                            display.textContent = resultado;
                            break;
                        }
                        break;
                    case 'C':       // Limpiar el display y reiniciar las variables
                        display.textContent = '0';
                        displayTop.textContent = '';
                        operando1 = null;
                        operando2 = null;
                        operacion = null;
                        break;
                    default:        // Boton de borrar ultima unidad
                        let displayText = display.textContent;
                        let newDisplayText = displayText.slice(0, -1);
                        if (newDisplayText.length === 0) {
                                newDisplayText = '0';
                        }
                        display.textContent = newDisplayText;
                        break;
                }
            }
        });
    });    
});
