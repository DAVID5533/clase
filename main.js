/*
const p = document.querySelector(".pe");

var numfibo = [0,1];
var cant = 10;

for(i = 2; i <= cant; i++){
    numfibo.push(numfibo[i-1] + numfibo[i-2]);
    
};

for(i = 0; i <= 10 ; i++){
    p.innerHTML +=  `El valor es: ${numfibo[i]}`;
};*/


const p = document.querySelector(".pe");
        
let fib = function(n){
    if(n<=1) return n; 

    return fib(n - 1) + fib(n - 2);
}

for(i = 2; i <= 10 ; i++){
    p.innerHTML +=  `El valor es: ${fib(i)} <br> <br>`;
};


    

    

	