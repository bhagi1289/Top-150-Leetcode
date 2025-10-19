let arr = [4,9,0,2,7,1]

var secondLargestValue = (arr) => {

    if(arr.length < 2)
        return null

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i of arr){
        if (i > firstLargest){
            secondLargest = firstLargest;
            firstLargest = i;
        }
        else if (i > secondLargest && i != firstLargest){
            secondLargest = i
        }
    }

    return secondLargest;
}

console.log(secondLargestValue([10, 20, 20]))