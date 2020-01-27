var tablo;
var currentOperation = ""; 
var firstNumber = ""; 
var secondNumber = "";
var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";

window.onload=function() {
	tablo = document.getElementById("ReadOut");
}

function BtnPress(Num) {
	// 1. если поле ввода пустое или = 0
	// 2. если  ранее уже вводилась цифра
	// 3. если ранее была операция
	if (currentOperation != "") {
		secondNumber += Num;
		tablo.value = secondNumber;
	} else {
		if (tablo.value == "0" || tablo.value == "") {
			tablo.value = Num;	
		}	else {
			tablo.value = tablo.value + Num;
		}
	}
}
	
function processOperation() {
	
	if(currentOperation == "+") {
		processSum();
	}
	if(currentOperation == "-") {
		processMinus();
	}
	if(currentOperation == "*") {
		processMultiple();
	}
	if(currentOperation == "/") {
		processDivide();
	}
}

function processSum() {
	tablo.value = parseFloat(firstNumber) + parseFloat(tablo.value);
}

function processMinus() {
	tablo.value = parseFloat(firstNumber) - parseFloat(tablo.value);
}

function processMultiple() {
	tablo.value = parseFloat(firstNumber) * parseFloat(tablo.value);
	} 
	
function processDivide() {
	var secondNumber = parseFloat(tablo.value);
	if (secondNumber == 0) {
		tablo.value = "Error";
	} else {
	tablo.value = parseFloat(firstNumber) / parseFloat(tablo.value);
	}		
}


// const roomNumber = (arr) => {
// obj = {};
// arr.sort((a, b) => a - b).forEach(item => {
// 	if(!obj[item]) {
// 		obj[item] = [item];
// 	} else {
// 		obj[item] = [...obj[item], item];
// 	}
// });
// // return Object.values(obj).map(item => (item.length > 1 ? item : item[0]));
// return obj;
// };
//
// roomNumber([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]);



const roomNumber = (arr) => {
resultArray = [];
tempArray = [];
a = arr[0];
tempArray.append(a);
for(i = 1, i < arr.length, i++) {
	b = arr[i];
	if (a == b) {
		tempArray.append(b) 
	} else {
		resultArray.append(tempArray);
		tempArray = [];
		tempArray.append(b);
		a = b;
	}
}
if (tempArray != []) {
	resultArray.append(tempArray);
}
}
roomNumber([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]);




function setOperation(o) {
	if (currentOperation == "") {
		firstNumber = tablo.value;	
	}
	if (secondNumber == "") {
		currentOperation = o;
	} else {
		processOperation(); // провести операцию 
		currentOperation = o;
		firstNumber = tablo.value;
		secondNumber = "";
	}
}

function clearTablo() {
	tablo.value = "";
	currentOperation = "";
 	firstNumber = "";
 	secondNumber = "";
}

function pressDecimal() {
	// десятичная доля
	// Ч ФУНКЦИИ у
	// 1. если поле ввода пустое или = 0 
	// 2. если цифра введена
	// 3. выбрана операция

	if (currentOperation != "") {
		secondNumber = secondNumber + ".";
		tablo.value = secondNumber;
	} else {
		if (tablo.value == "" || tablo.value == "0") {
		tablo.value = "0."
		} else {
			tablo.value = tablo.value + "."
		}
	}
}

function negValue() {
	
	tablo.value = parseFloat(tablo.value) * -1;  // Change the sign to + if - and minus if plus
 	
	// if(tablo.value.substring(0, 1) == "-") {
	// 	tablo.value = tablo.value.substring(1, tablo.value.length)
	// } else {
	// 	tablo.value = "-" + tablo.value
	// }
}	

function Percent() {	
	tablo.value = parseFloat(tablo.value) / 100; // (* /) = true
	if (currentOperation == "+") {
		tablo.value = parseFloat(firstNumber) * parseFloat(tablo.value); // (+) = true
	}
	if (currentOperation == "-") {
		tablo.value = parseFloat(firstNumber) * parseFloat(tablo.value); // (-) = true
	}
}
	
	
//если после "+", "-" вводится "*", "/", то второе действие выполняется в приоритете