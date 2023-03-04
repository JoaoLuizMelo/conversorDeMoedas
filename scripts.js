const button = document.getElementsByTagName("button")[0]
const select = document.getElementById("currencySelect")
const baseSelect = document.getElementById("baseSelect")

const dollarValue = 5.2
const euroValue = 5.9
const realBrasileiro = 1

const convertValue = () => {
    const input = document.getElementsByTagName("input")[0].value
    const numberOne = document.getElementById("value1")
    const numberTwo = document.getElementById("value2")

    numberOne.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input)
    if (select.value === "US$ Dolar Americano") {
        const convert = (input / dollarValue)
        numberTwo.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convert)
    }
    if (select.value === "€ Euro") {
        const convert = (input / euroValue)
        numberTwo.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(convert)
    } if (select.value === "R$ Real Brasileiro") {
        const convert = (input / realBrasileiro)
        numberTwo.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(convert)
    }
}
const curencyChange = () => {
    const currencyCoin = document.getElementById("currency-coin")
    const currencyImg = document.getElementById("currency-img")
    console.log(select.value);

    if (select.value === "US$ Dolar Americano") {
        currencyCoin.innerHTML = "Dólar Americano"
        currencyImg.src = "/assets/estados-unidos (1) 1.png"
    }

    if (select.value === "€ Euro") {
        currencyCoin.innerHTML = "Euro"
        currencyImg.src = "/assets/euro.png"
    }

    if (select.value === "R$ Real Brasileiro") {
        currencyCoin.innerHTML = "Real"
        currencyImg.src = "/assets/brasil 2.png"
    }

    convertValue()
}



button.addEventListener('click', convertValue)
select.addEventListener('change', curencyChange)
baseSelect.addEventListener('change', curencyChange)