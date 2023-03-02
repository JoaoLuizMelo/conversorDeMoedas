const button = document.getElementsByTagName("button")[0]

const dollarValue = 5.2

const convertValue = () =>{
const input = document.getElementsByTagName("input")[0].value

const numberOne = document.getElementById("value1")
numberOne.innerHTML = input

const convert =(input/dollarValue).toFixed(1)

const numberTwo = document.getElementById("value2")
numberTwo.innerHTML = convert

console.log(numberTwo);


}

button.addEventListener('click',convertValue)