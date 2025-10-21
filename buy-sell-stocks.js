const stocks = [7, 1, 5, 3, 6, 4]

const maxProfit = (arr) => {

    let minDay = arr[0]
    let maxProfit =0;

    for(let i=1; i<arr.length; i++){
        if( arr[i]-minDay > maxProfit){
            maxProfit = arr[i] - minDay
        }
        if(arr[i]< minDay){
            minDay = arr[i]
        }
    }

    console.log("Min: ",minDay,  "max Profit:", maxProfit)
}

maxProfit(stocks)