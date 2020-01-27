let display;
let currentOperation = "";
let firstNumber = "";
let secondNumber = "";

window.onload=function() {
	display = document.getElementById("ReadOut");
};

function numPress(Num) {
	// 1. если поле ввода пустое или = 0
	// 2. если  ранее уже вводилась цифра
	// 3. если ранее была операция
	if (currentOperation !== "") {
		secondNumber += Num;
		display.value = secondNumber;
	} else {
		if (display.value === "0" || display.value === "") {
			display.value = Num;
		}	else display.value += Num;
	}
}
	
function processOperation() { // "="
	
	if(currentOperation === "+") {
		processSum();
	}
	if(currentOperation === "-") {
		processMinus();
	}
	if(currentOperation === "*") {
		processMultiple();
	}
	if(currentOperation === "/") {
		processDivide();
	}
}

function processSum() {
	display.value = parseFloat(firstNumber) + parseFloat(display.value);
}

function processMinus() {
	display.value = parseFloat(firstNumber) - parseFloat(display.value);
}

function processMultiple() {
	display.value = parseFloat(firstNumber) * parseFloat(display.value);
	} 
	
function processDivide() {
	let secondNumber = parseFloat(display.value);
	if (secondNumber === 0) {
		display.value = "Error";
	} else {
	display.value = parseFloat(firstNumber) / parseFloat(display.value);
	}		
}

function setOperation(o) {
	if (currentOperation === "") {
		firstNumber = display.value;	
	}
	if (secondNumber === "") {
		currentOperation = o;
	} else {
		processOperation(); // провести операцию 
		currentOperation = o;
		firstNumber = display.value;
		secondNumber = "";
	}
}

function clearDisplay() {
	display.value = "0";
	currentOperation = "";
 	firstNumber = "";
 	secondNumber = "";
}

function pressDecimal(Num) {
	// десятичная доля
	// 1. если поле ввода пустое или = 0 
	// 2. если цифра введена
	// 3. выбрана операция

	if (currentOperation !== "" && secondNumber === "") {
			display.value = "0.";
			secondNumber = display.value;
		} else {
		if (display.value.indexOf(".") === -1) {
			display.value += ".";
			secondNumber = display.value;
		}
	}
}

function negValue() {
	display.value = parseFloat(display.value) * -1;  // Change the sign to + if - and minus if plus
}

function Percent() {
	display.value = parseFloat(display.value) / 100; // (* /) = true
	if (currentOperation === "+" || currentOperation === "-") {
		display.value = parseFloat(firstNumber) * parseFloat(display.value); // (+/-) = true
	}
}

// если после "+", "-" вводится "*", "/", то второе действие выполняется в приоритете