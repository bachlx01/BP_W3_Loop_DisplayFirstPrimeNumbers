let total = parseInt(prompt('Enter count of prime numbers you want to display: '));
let count = 0;
let number = 3;
for (count = 0; count < total; number+=2) {
    if (checkprime(number) == true) {
        document.write(number+'<br>');
        count++;
    }
}

function checkprime(check) {
    let prime = true;
    for (let i = 3; i < check; i+=2) {
        if (check % i === 0) {
            prime = false;
        }
    }
    return prime;
}
