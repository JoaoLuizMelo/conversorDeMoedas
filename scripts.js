const button = document.getElementsByTagName("button")[0]
const select = document.getElementById("currencySelect")
const baseSelect = document.getElementById("baseSelect")


const convertValue = async() => {
    const input = document.getElementsByTagName("input")[0].value
    const numberOne = document.getElementById("value1")
    const numberTwo = document.getElementById("value2")
    if (baseSelect.value === "R$ Real Brasileiro") {

        const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response =>response.json())
        const dollarValue = data.USDBRL.high
        const euroValue = data.EURBRL.high
        const realBrasileiro = 1
        const bitcon = data.BTCBRL.high
        

        numberOne.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input)

        if (select.value === "US$ Dolar Americano") {
            const convert = (input / dollarValue)
            numberTwo.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convert)
        }
        if (select.value === "€ Euro") {
            const convert = (input / euroValue)
            numberTwo.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(convert)
        }
        if (select.value === "R$ Real Brasileiro") {
            const convert = (input / realBrasileiro)
            numberTwo.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(convert)
        }
        if (select.value === "Bitcoin") {
            const convert = input / bitcon
            numberTwo.innerHTML = new Intl.NumberFormat({ style: 'decimal' }).format(convert)
        }
    }
    if (baseSelect.value === "US$ Dolar Americano") {
        const data = await fetch('https://economia.awesomeapi.com.br/last/BRL-USD,EUR-USD,BTC-USD').then(response =>response.json())
        const dollarValue = 1
        const euroValue = data.EURUSD.high
        const realBrasileiro = data.BRLUSD.high
        const bitcon = data.BTCUSD.high
        

        numberOne.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input)

        if (select.value === "US$ Dolar Americano") {
            const convert = (input / dollarValue)
            numberTwo.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convert)
        }
        if (select.value === "€ Euro") {
            const convert = (input / euroValue)
            numberTwo.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(convert)
        }
        if (select.value === "R$ Real Brasileiro") {
            const convert = (input / realBrasileiro)
            numberTwo.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(convert)
        }
        if (select.value === "Bitcoin") {
            const convert = input / bitcon
            numberTwo.innerHTML = new Intl.NumberFormat({ style: 'decimal' }).format(convert)
        }
    }
    if (baseSelect.value === "€ Euro") {
        const data = await fetch('https://economia.awesomeapi.com.br/last/BRL-EUR,USD-EUR,BTC-EUR').then(response =>response.json())
        const dollarValue = data.USDEUR.high
        const euroValue = 1
        const realBrasileiro = data.BRLEUR.high
        const bitcon = data.BTCEUR.high
       
        numberOne.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(input)

        if (select.value === "US$ Dolar Americano") {
            const convert = (input / dollarValue)
            numberTwo.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convert)
        }
        if (select.value === "€ Euro") {
            const convert = (input / euroValue)
            numberTwo.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(convert)
        }
        if (select.value === "R$ Real Brasileiro") {
            const convert = (input / realBrasileiro)
            numberTwo.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(convert)
        }
        if (select.value === "Bitcoin") {
            const convert = input / bitcon
            numberTwo.innerHTML = new Intl.NumberFormat({ style: 'decimal' }).format(convert)
        }
    }
    if (baseSelect.value === "Bitcoin") {
        const data = await fetch('https://economia.awesomeapi.com.br/last/BTC-BRL,BTC-USD,BTC-EUR').then(response =>response.json())
        const dollarValue = (1/parseFloat(data.BTCUSD.high))
        const euroValue = (1/parseFloat(data.BTCEUR.high))
        const realBrasileiro = (1/parseFloat(data.BTCBRL.high))
        const bitcon = 1
        

        numberOne.innerHTML = new Intl.NumberFormat({ style: 'decimal'}).format(input)

        if (select.value === "US$ Dolar Americano") {
            const convert = (input / dollarValue)
            numberTwo.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convert)
        }
        if (select.value === "€ Euro") {
            const convert = (input / euroValue)
            numberTwo.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(convert)
        }
        if (select.value === "R$ Real Brasileiro") {
            const convert = (input / realBrasileiro)
            numberTwo.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(convert)
        }
        if (select.value === "Bitcoin") {
            const convert = input / bitcon
            numberTwo.innerHTML = new Intl.NumberFormat({ style: 'decimal' }).format(convert)
        }
    }

}
const curencyChange = () => {
    if (baseSelect.value === "R$ Real Brasileiro") {
        const currencyCoin = document.getElementById("currency-coin")
        const currencyImg = document.getElementById("currency-img")
        const baseImg = document.getElementById("base-img")
        const baseCoin = document.getElementById("base-coin")

        baseCoin.innerHTML = "Real"
        baseImg.src = "/assets/brasil 2.png"


        console.log(baseSelect.value);

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
        if (select.value === "Bitcoin") {
            currencyCoin.innerHTML = "Bitcoin"
            currencyImg.src = "/assets/bitcoin.png"
        }

        convertValue()
    }
    if (baseSelect.value === "US$ Dolar Americano") {
        const currencyCoin = document.getElementById("currency-coin")
        const currencyImg = document.getElementById("currency-img")
        const baseImg = document.getElementById("base-img")
        const baseCoin = document.getElementById("base-coin")

        baseCoin.innerHTML = "US$ Dolar Americano"
        baseImg.src = "/assets/estados-unidos (1) 1.png"


        console.log(baseSelect.value);

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
        if (select.value === "Bitcoin") {
            currencyCoin.innerHTML = "Bitcoin"
            currencyImg.src = "/assets/bitcoin.png"
        }

        convertValue()
    }
    if (baseSelect.value === "€ Euro") {
        const currencyCoin = document.getElementById("currency-coin")
        const currencyImg = document.getElementById("currency-img")
        const baseImg = document.getElementById("base-img")
        const baseCoin = document.getElementById("base-coin")

        baseCoin.innerHTML = "Euro"
        baseImg.src = "/assets/euro.png"


        console.log(baseSelect.value);

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
        if (select.value === "Bitcoin") {
            currencyCoin.innerHTML = "Bitcoin"
            currencyImg.src = "/assets/bitcoin.png"
        }

        convertValue()
    }
    if (baseSelect.value === "Bitcoin") {
        const currencyCoin = document.getElementById("currency-coin")
        const currencyImg = document.getElementById("currency-img")
        const baseImg = document.getElementById("base-img")
        const baseCoin = document.getElementById("base-coin")

        baseCoin.innerHTML = "Bitcoin"
        baseImg.src = "/assets/bitcoin.png"


        console.log(baseSelect.value);

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
        if (select.value === "Bitcoin") {
            currencyCoin.innerHTML = "Bitcoin"
            currencyImg.src = "/assets/bitcoin.png"
        }

        convertValue()
    }
}

button.addEventListener('click', convertValue)
select.addEventListener('change', curencyChange)
baseSelect.addEventListener('change', curencyChange)