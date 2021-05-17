function isPrime(number){
for(let x = 2; x < number; x++){
    if(number % x === 0){
        console.log(`${number} is divisible by ${x}`);
        return false;
    }
}
return true;
}

isPrime(49);