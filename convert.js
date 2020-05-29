const btn = document.getElementById("convert");
const pbAPI = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
const request = new XMLHttpRequest();
request.open('GET', pbAPI);
request.responseType = "json";
request.send();

request.onload = function loadJson() {
    const currency = request.response;
    let sumSale;
    let sumBuy;
    let sum;

    btn.onclick = function () {
        return calculate();
    }


    function calculate() {
        const select = document.querySelector(".current").value;
        if (select == "UAH") {
            return currencyUAH();
        }
    }


    function currencyUAH() {

        const input = document.querySelector(".inp").value;
        const out = document.querySelector("#out");
        const selectOut = document.querySelector(".currentOut").value;

        if (selectOut == "USD") {
            console.log(request);
            sumSale = input / currency[0].buy;
            out.innerHTML = `на виході буде ${sumSale.toFixed(3)} usd`;
        } else if (selectOut == "EUR") {
            sumSale = input / currency[1].buy;
            out.innerHTML = `на виході буде ${sumSale.toFixed(3)} eur`;
        } else if (selectOut == "RUR") {
            sumSale = input / currency[2].buy;
            out.innerHTML = `на виході буде ${sumSale.toFixed(3)} rur`;
        } else {
            sumSale = input / 1;
            out.innerHTML = `на виході буде ${sumSale.toFixed(3)} UAH`;
        }

    }


}


// for (let key in currency) {
//         //
//         //     if (select === currency[key].ccy && selectOut === currency[key].base_ccy) {
//         //         sumSale = input * currency[key].sale;
//         //         out.innerHTML = `на виході буде ${sumSale.toFixed(3)}`;
//         //
//         //     } else if (select === "UAH" && selectOut === currency[key].ccy) {
//         //         sumBuy = input / currency[key].buy;
//         //         out.innerHTML = `на виході буде ${sumBuy.toFixed(3)}`;
//         //     }
//         // }