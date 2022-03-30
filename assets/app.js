const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []


function getUserInput(){
    return parseInt(userInput.value)
}
function createAndWriteToOutput(operator, oldResult, writeNumber){
const calculationDescription = `${oldResult} ${operator} ${writeNumber}`
 outputResult(currentResult, calculationDescription);
}
function writeToLog(operation , addedNumber , prevResult, result ){
    const logEntry = {
        operation: operation,
        addedNumber: addedNumber,
        prevResult: prevResult,
        result: result
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}

function calculationResult (calculationType) {
    const enterNumber = getUserInput()
    if(calculationType !== 'ADD' && 
    calculationType !== 'SUBTRACT' &&
     calculationType !== 'MULTIPLY' &&
     calculationType !== 'DIVIDE' ||
     !enterNumber) {
         return;
     }

  
   
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

function add() {
  calculationResult('ADD')
  
}

function subtract(){
    calculationResult('SUBTRACT');
}
function multiply(){
    calculationResult('MULTIPLY');
}
function divide(){
    calculationResult('DIVIDE');
}

subtractBtn.addEventListener('click', subtract)
addBtn.addEventListener('click', add)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)