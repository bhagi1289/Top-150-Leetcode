
var nums = [2,2,3,3,3,4]
//output: [2,2,4]

const removeElements = (n, value) => {

    let x=0;
    let i=0;

    for(;i<n.length; i++){
        if(n[i] != value){
            n[x] = n[i]
            x = x+1
        }
    }

    console.log(x, n.splice(0, x))
}


removeElements(nums, 3)