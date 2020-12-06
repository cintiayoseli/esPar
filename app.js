function numero(num){
    if(num !== 0){
    return num % 2 == 0 ? "El número es par" : "El número es impar"
    }else{
    return "ERROR"
    }
    }
    console.log(numero(5))