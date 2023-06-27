let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let InputValueCount = document.getElementById('countNumber');


let plusBtn1 = document.getElementById('plus1');
let minusBtn1 = document.getElementById('minus1');
let InputValueCount1 = document.getElementById('countNumber1'); // = <input id='countNumber1' value='1'>


let priceValue = document.getElementById('price'); // <span id='price'>200</span>
let priceValue1 = document.getElementById('price1');


let totalValue = +priceValue.innerText + +priceValue1.innerText; // ekhane tatalValue te price = 200 + price1 = 150


let subtotalMaan = document.getElementById('subtotal'); //= <span id='subtotal>0</span>

subtotalMaan.innerText = totalValue; 
//  innerText = inner content / text of tag


let PointRemove = parseInt(subtotalMaan.innerText * (1 + 15 / 100));



let grandTotalMaan = document.getElementById('grandTotal');
grandTotalMaan.innerText = PointRemove;


calculation(plusBtn, minusBtn, InputValueCount, subtotalMaan, grandTotalMaan, priceValue);
calculation1(plusBtn1, minusBtn1, InputValueCount1, subtotalMaan, grandTotalMaan, priceValue1);




function calculation(plus, minus, count, subtotal, grandTotal, price) { 
    plus.addEventListener('click', function () {
        let county = +count.value + 1;
        count.value = county;
        if (count.value > 0) {
            minus.removeAttribute('disabled');
        }
        let subtotalValue = +subtotal.innerText + 200;
        subtotal.innerText = subtotalValue;
        let grandTotalValue = parseInt(subtotalValue * (1 + 15 / 100));
        grandTotal.innerText = grandTotalValue;
        let pricey = +price.innerText + 200;
        price.innerText = pricey;
    })
    minus.addEventListener('click', function () {
        let county = +count.value - 1;
        count.value = county;
        if (count.value < 1) {
            minus.setAttribute('disabled', true);
        }
        let subtotalValue = +subtotal.innerText - 200;
        subtotal.innerText = subtotalValue;
        let grandTotalValue = parseInt(subtotalValue * (1 + 15 / 100));
        grandTotal.innerText = grandTotalValue;
        let pricey = +price.innerText - 200;
        price.innerText = pricey;

    })
}


function calculation1(plus, minus, count, subtotal, grandTotal, price) { //count = <input value id> vlaue = '1'
    plus.addEventListener('click', function () {
        let county = +count.value + 1;
        count.value = county;
        let subtotalValue = +subtotal.innerText + 150;
        subtotal.innerText = subtotalValue;
        let grandTotalValue = parseInt(subtotalValue * (1 + 15 / 100));
        grandTotal.innerText = grandTotalValue;
        let pricey = +price.innerText + 150;
        price.innerText = pricey;

        if(count.value > 0) {
            minus.removeAttribute('disabled')
        }

    })
    minus.addEventListener('click', function () {
        let county = +count.value - 1;
        count.value = county;
        let subtotalValue = +subtotal.innerText - 150;
        subtotal.innerText = subtotalValue;
        let grandTotalValue = parseInt(subtotalValue * (1 + 15 / 100));
        grandTotal.innerText = grandTotalValue;
        let pricey = +price.innerText - 150;
        price.innerText = pricey;

        if(count.value < 1) {
            minus.setAttribute('disabled', true)
        } 

    })
} 

document.getElementById('close').addEventListener('click', () => {document.getElementById('cart').style.display = 'none'});
document.getElementById('close1').addEventListener('click', () => {document.getElementById('cart1').style.display = 'none'});