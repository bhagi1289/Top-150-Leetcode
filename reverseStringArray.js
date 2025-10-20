var a = ['h', 'e', 'l', 'l', 'o'];

const reverseString = (arr) => {
    let length = arr.length;
    let halfLength = Math.floor(length/2)

    for(let i=0; i<halfLength; i++){
        let temp = a[i];
        a[i] = a[length-1-i];
        a[length-1-i] = temp
    }

    console.log(arr)

}

reverseString(a);