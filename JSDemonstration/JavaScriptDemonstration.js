// find factorial number
let num;
let factorial = 1;
document.getElementById("submit").onclick = function () {
    num = document.getElementById("fact").value;
    num = Number(num);
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById("fact_print").textContent = ` factorial : ${factorial}`;
}


// fibonacci series
document.getElementById("fibo").onclick = function () {
    const num = document.getElementById("number").value;
    let n1 = 0, n2 = 1, nextTerm;
    let text = "Fibonacci Series: ";
    for (let i = 1; i <= num; i++) {
        text += n1 + " ";
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    document.getElementById("fiboresult").textContent = text;
}


function generatePrimes() {
    const n = parseInt(document.getElementById("upperlimit").value);
    const primes = [];
    if (n <= 1) {
        document.getElementById("primeresult").textContent = "No prime numbers found for numbers less than 2";
        return;
    }
    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    document.getElementById("primeresult").textContent = "Prime numbers: " + primes.join(", ");
}
document.getElementById("psubmit").addEventListener("click", generatePrimes);



// expression calculation
document.getElementById("submit_expression").onclick = function () {
    const x = Number(document.getElementById("num1").value);
    const y = Number(document.getElementById("num2").value);
    const sign = document.getElementById("sign").value;
    let result;
    if (isNaN(x) || isNaN(y)) {
        document.getElementById("result").textContent = "Invalid input";
        return;
    }
    switch (sign) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            if (y === 0) {
                document.getElementById("result").textContent = "Division by zero";
                return;
            }
            result = x / y;
            break;
        case "%":
            result = x % y;
            break;
        default:
            document.getElementById("result").textContent = "Invalid operator";
            return;
    }
    document.getElementById("result").textContent = `Result: ${result}`;
};


// reverse a number
document.getElementById("submit_rev").onclick = function () {
    let rev = 0;
    num = document.getElementById("rev").value;
    num = Number(num);
    while (num > 0) {
        rev = rev * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    document.getElementById("rev_print").textContent = `Reverse number : ${rev}`;
}

