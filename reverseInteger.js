const number = -1234;

const reverseInteger = (n) => {
    var rev= 0;
    let nCopy = n;
    n = Math.abs(n);

    while(n>0){
        
        let lastDigit = n%10;
        rev = (10 * rev)+ lastDigit;
        n = Math.floor(n/10)
    }

    let limit = Math.pow(2, 31)

    if (rev < -limit || rev > limit) return 0
    return nCopy<0 ? -rev: rev
}

console.log(reverseInteger(number))