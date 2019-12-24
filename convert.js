const btn = document.querySelector(".covert");
const pbAPI = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
const request = new XMLHttpRequest();
request.open('GET', pbAPI);
request.responseType = "json";
request.send();

request.onload = function loadJson(){           
    const currency = request.response;
    let sumSale;
    let sumBuy;
    let sum;

    btn.onclick = function() {
      return calculate();  
    }

    
    function calculate(){
      const input = document.querySelector(".inp").value;
      const select = document.querySelector(".current").value;
      const selectOut = document.querySelector(".currentOut").value;
      const out = document.querySelector("#out");


      for(let key in currency){

        if(select === currency[key].ccy && selectOut === currency[key].base_ccy){
           sumSale = input *  currency[key].sale;
           out.innerHTML = `на виході буде ${sumSale.toFixed(3)}`;
           
      } else if( select === "UAH" &&  selectOut === currency[key].ccy){
        sumBuy = input /  currency[key].buy;
        out.innerHTML = `на виході буде ${sumBuy.toFixed(3)}`;
      } 
    }
  }
}