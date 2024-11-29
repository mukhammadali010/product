
let productName = document.getElementById('productName')
let productCount = document.getElementById('productCount')
let productPrice = document.getElementById('productPrice')
let soldCount = document.getElementById('soldCount')
let soldPrice = document.getElementById('soldPrice')
let profit1 = document.getElementById('profit1')
let profit2 = document.getElementById('profit2')
let btn = document.getElementById('btn');

btn.addEventListener('click' , (e)=>{
    e.preventDefault()
    
    if(soldPrice.value !== 0 && productPrice.value !== 0){

        let res =  soldPrice.value - productPrice.value;
        let total =  productPrice.value * productCount.value - soldPrice.value * soldCount.value; 
        
        profit1.value = res;
        profit2.value = total;
    }
    
})
