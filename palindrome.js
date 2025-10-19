let num = 101;

const palindrome = (n) => {
    let rev = 0;

    while(n > 0){
        let lastDigit = n%10;
        rev = (rev*10) + lastDigit
        n = Math.floor(n/10)
    }
    if(rev === num){
        return true
    }else{
        return false
    }
}

console.log(palindrome(num))