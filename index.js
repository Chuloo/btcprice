$(document).ready(function(){
var currency = 'usd'
var list = document.getElementById("currency-list")
currency = currency.toUpperCase()

function getPrice() {
    currency.toUpperCase
    url = `https://api.coinbase.com/v2/prices/spot?currency=${currency}`
    $.getJSON(url, function (btcPrice) {
        let price = btcPrice.data.amount;
        document.getElementById('price').innerText = price + " " + currency;
        document.getElementById('time').innerText = new Date()
    }, 'JSONP')
}
setInterval(getPrice, 500);

function getNewPrice() {
    var x = list.value
    currency = x.slice(0, 3)
    setInterval(getPrice, 500)
}
//getNewPrice()

let button = document.getElementById('button')
button.addEventListener('click', getNewPrice)


function getCurrencies() {
    $.getJSON('https://api.coinbase.com/v2/currencies', function (money) {
        var currencies = [];
        for (i = 0; i < money.data.length; i++) {
            currencies.push(money.data[i].id + "-" + money.data[i].name)
        }
        currencies.forEach(function (val) {
            var option = document.createElement("OPTION")
            option.setAttribute("value", `${val}`)
            var text = document.createTextNode(`${val}`)
            option.appendChild(text)
            list.appendChild(option)
        })
    })
}
getCurrencies();
})