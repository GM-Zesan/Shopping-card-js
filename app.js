function getProductNumber(product, price, isIncreasing){
    const inputNumber = document.getElementById(product+'-number');
    if(isIncreasing == true){
        inputNumber.value = parseInt(inputNumber.value)+1;
    }
    else if(isIncreasing == false && inputNumber.value>0){
        inputNumber.value = parseInt(inputNumber.value)-1;
    }

    
    const productTotal = parseInt(inputNumber.value)*price;
    document.getElementById(product+'-total').innerText = productTotal;

    updateAmount();
    
}

function updateAmount(){
    const phoneTotal = parseInt(document.getElementById('phone-number').value)*1219;
    const caseTotal = parseInt(document.getElementById('case-number').value)*59;
    const subTotal = phoneTotal+caseTotal;
    const tax = subTotal/10;
    const totalAmount = subTotal+tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalAmount;
}



document.getElementById('phone-plus').addEventListener('click',function(){
    getProductNumber('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    getProductNumber('phone',1219,false);
})

document.getElementById('case-plus').addEventListener('click',function(){
    getProductNumber('case',59,true);
})
document.getElementById('case-minus').addEventListener('click',function(){
    getProductNumber('case',59,false);
})