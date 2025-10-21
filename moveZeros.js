var nums = [0, 1, 0, 3, 12];

const moveZeros = (n) => {

    let j=0;
    for(let i=0; i<n.length; i++){
        if(n[i] != 0){
            let temp = n[j]
            n[j] = n[i]
            n[i] = temp
            j++
        }
    }

    return n;
}

console.log(moveZeros(nums))