let nums = [1,12,-5,-6,50,3];
let k = 4;


// const findMaxAverage = (nums, k) => {

//     let max = 0;

//     for(let i=0; i<nums.length; i++){
//         if(k <= nums.length){
//             let sub = nums.slice(i, k);
//             const sum = sub.reduce((acc, cur)=> acc+cur, 0)
//             let avg = sum/sub.length;
//             max = Math.max(max, avg)
//             k++
//         }
        
//     }

//     console.log(max)
// }

var findMaxAverage = function(nums, k) {
    
    let sum =0;

    // step 1 inital k elements
    for(let i=0; i<k; i++){
        sum += nums[i]
    }

    let maxSum = sum;
    for(let i=k; i<nums.length; i++){
        sum = sum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum / k
};

findMaxAverage(nums, k)