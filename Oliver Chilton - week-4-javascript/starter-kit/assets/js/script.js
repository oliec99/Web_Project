function toggleModal(){
	var modal = document.querySelector('.modal');
	modal.classList.toggle('is-visible');

	var resultLabel = document.getElementById('result');
	resultLabel.inner
}

var operator = radioButtons;

switch(operator){
	case "add":
	add();

	case "subtract":
	sub();

	case "divide":
	divide();

	case "multiply":
	multiply();
}

function add(valueA, valueB){
	return valueA + valueB;
}

function sub(valueA, valueB){
	return valueA - valueB;
}

function multiply(valueA, valueB){
	return valueA * valueB;
}

function divide(valueA, valueB){
	return valueA / valueB;
}


function getActiveRadioButton(){
	var radioButtons = document.querySelector('[name = "operator"]:checked');
	console.log(radioButtons);
	return radioButtons
}
