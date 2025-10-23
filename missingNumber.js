// 268. Missing Number
let nums = [3,0,1]
const missingNumber = (nums) =>{
    let n = nums.length
    let total = (n*(n+1)) / 2 

    let sum =0;
    for(let i of nums){
        sum += i
    }

    return total - sum
}

console.log(missingNumber(nums))