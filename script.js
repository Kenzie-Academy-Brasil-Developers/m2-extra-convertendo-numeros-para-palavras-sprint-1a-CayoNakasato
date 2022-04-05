const inputValue = document.querySelector(".number");
const btn = document.querySelector('.btn__convert');
const result = document.querySelector('.result');

btn.addEventListener('click', () =>{
    let extenso = numbersToWords(inputValue.value);
    result.innerText = `O número por extenso é  => ${extenso}`;
})

function numbersToWords(number){
    return wordNumber(number);
}

function wordNumber(n){
    if( n === '1000'){
        return "mil";
    }else if(n === '100'){
        return "cem";
    }
    else if(n > 100 && n < 1000){
        let numeroSeparado = n.toString().split('')

        let centena = numeroSeparado[0];
        let dezena = numeroSeparado[1];
        let unidade = numeroSeparado[2];

        let hundreds = hundred[centena- 1]
        let result = hundred[centena - 1];

        if(dezena === '0' && unidade === '0'){
            return hundreds;
        }
        if(dezena > 0){
            newResult = result + " e " + tenNumbers[dezena - 1]
        }
        if(unidade > 0){
            newResult += " e " + numberWithoutConcat[unidade];
        }
        return newResult;

    }else if(n < 20){
        return numberWithoutConcat[n];
    }else if(n < 100){
        let numeroSeparado = n.toString().split('')

        let dezena = numeroSeparado[0];
        let unidade = numeroSeparado[1];

        let resultDezena = tenNumbers[dezena-1];

        if(unidade > 0){
            resultDezena += " e " + numberWithoutConcat[unidade];
        }
    return resultDezena;
    }
}
