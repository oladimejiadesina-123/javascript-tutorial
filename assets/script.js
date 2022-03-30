const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

currentResult = (currentResult + 10) * 3 / 2 - 1;

calculateDescription = `(${defaultResult} + 10 ) * 3 / 2 - 1`;

outputResult(currentResult, calculateDescription);

function add () {

    if(calculationType === 'ADD' ||
    calculationType === 'SUBTRACT' ||
     calculationType === 'MULTIPLY' ||
     calculationType === 'DIVIDE') {
           
    const enterNumber = getUserInput()
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === "ADD") {
        currentResult += enterNumber;
        mathOperator = '+';

    }else if(calculationType === "SUBTRACT"){
        currentResult -= enterNumber;
        mathOperator = '-';
    }else if(calculationType === "MULTIPLY"){
        currentResult *= enterNumber;
        mathOperator = '*';
    }else if(calculationType === "DIVIDE"){
        currentResult /= enterNumber;
        mathOperator = '/'
    }
    createAndWriteToOutput(mathOperator, currentResult, enterNumber)
    writeToLog(calculationType, enterNumber, initialResult, currentResult)
     }
    const enteredNumber = parseInt(userInput.value)
    // you can pass it in all places
    let calculateDescription = `${currentResult} + ${parseInt(userInput.value)}`
    let calculateDescription = `${currentResult} + ${enteredNumber}`
   currentResult = currentResult + parseInt(userInput.value)
    outputResult(currentResult, calculateDescription)
    let logEntry = {
        operation: 'ADD',
        resultBeforeCalc: initialResult,
        putNumber: enteredNumber,
        totalResult: currentResult

    }
    logEntries.push(logEntry)
    console.log(logEntries)

}