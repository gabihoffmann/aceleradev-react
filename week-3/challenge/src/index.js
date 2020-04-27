'use strict'

const fibonacci = () => {

    let fn, fn_1, fn_2, n = 0;
    //iniciando a sequência com elemento zero
    let result = [0]; 
   
    while( result[n] <= 350){
        /**
         * Formula matemática preencher a sequencia de Fibonacci
         * com n elementos. 
         *  F(n) = F(n-1) + F(n-2) , n>= 2 e F(0) = 1, F(1) = 1
         *  exemplo para n = 3
         *  F(3) = F(2) + F(1)
         *  F(3) = [F(2) = F(1) + F(0)] + F(1)
         *  F(3) = 1 + 1 + 1 = 3
         * */ 
        if(n >= 2){
            //Para n >= 2
            fn = fn_2 + fn_1;
            result.push(fn);
                fn_1 = fn_2;
                fn_2 = fn;
                n++;
        }else{
            fn = fn_1 = fn_2 = 1;
            result.push(fn);
            n++;
        }
        console.log(result)
    }
    
    return `n : ${n}\n
            fn: ${fn}\n
            fn1: ${fn_1}\n
            fn2: ${fn_2}\n
            resultado: ${result}
            `;
}

const isFibonnaci = (num) => {
    
    //partindo de n = 2
    let fn, n = 2;
    //iniciando a sequência com F(0) e F(1)  igual a 1
    let result = [1,1]; 

    //Testar se num está nas posições 0 ou 1 do vetor
    if(num == result[0] || num == result[1]){
        return true
    }else{
        do{
            fn = result[n-2] + result[n-1];
            result.push(fn);
           
            if(result[n] == num ){
                return true
            }

            n++;
            
        }while(result[n-1] <= num)
    }

    return false

}

module.exports = {
    fibonacci,
    isFibonnaci,
}
