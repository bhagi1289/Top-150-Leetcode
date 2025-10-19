let array = [1,1,2,2,2,3,3,3,3,4]
//ouput [1,2,3,4] - k 4

const removeDuplicates = (arr) => {
    let x=0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[x]){
            x = x+1
            arr[x] = arr[i]
        }
    }
    console.log(arr.splice(0, x+1));
    return x+1
}

console.log(removeDuplicates(array));