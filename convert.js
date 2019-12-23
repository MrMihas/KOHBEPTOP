let btn = document.querySelector(".covert");


let pbAPI = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
// let json = require("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");
let request = new XMLHttpRequest();
request.open('GET', pbAPI);
request.responseType = "json";
request.send();

request.onload = function(){
    let carrency = request.response;
    //usa
    let sale = carrency[0].sale;
    let buy = carrency[0].buy;
   
   // console.log(valuta);

    btn.onclick = () => {
        let sumSale;
        let sumBuy;
        let input = document.querySelector(".inp").value;
        let select = document.querySelector(".current").value;
        let out = document.querySelector("#out");

        if(select == 1){
            sumSale = input * sale;
            sumBuy = input * buy;
            out.innerHTML = `продаж: ${sumSale.toFixed(3)} грн,
             купівля: ${sumBuy.toFixed(3)} грн.`;
            
        } else if(select == 2){
            sumSale = input / sale;
            sumBuy = input / buy;
            out.innerHTML = `продаж: ${sumSale.toFixed(3)} дрлв,
             купівля: ${sumBuy.toFixed(3)} дрлв.`;
        } 
    }
    
}

// buy sale [0]




// btn.onclick = () => {
//     let current = document.querySelector(".current").value;
//     let input = document.querySelector(".inp").value;
//     let out = document.querySelector("#out");
//     let sum;
//         if(current == 1){
//             sum = input * 23;
//             console.log(sum.toFixed(2));
            
//         } else if( current == 2){
//             sum = input / 24;
//             console.log(sum.toFixed(2));
            
//         }
//         // out.innerHTML = sum;
//     // return false;
    
// }

console.log(request);





