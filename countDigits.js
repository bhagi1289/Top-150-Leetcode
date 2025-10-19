let num = 234;

var countDigits = (n) => {

    if(n==0){
        return 1
    }
    n = Math.abs(n); // Makes to Postive
    let count = 0;

    while(n>0){
        n = Math.floor(n/10);
        count++
    }

    return count;
}

console.log(countDigits(num))