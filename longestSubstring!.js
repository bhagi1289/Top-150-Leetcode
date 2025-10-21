// 3. Longest Substring Without Repeating Characters

s = "abcabcbb"

var lengthOfLongestSubstring = (str) =>{

    let set= new Set();
    let longLength=0;

    let left=0;
    let right=0;
    let startIndex =0;

    while(right < str.length){

        if(!set.has(str[right])){
            set.add(str[right]);
            right++
            if(right - left > longLength){
                longLength = right - left;
                startIndex =  left
            }
        }else {
            set.delete(str[left])
            left++
        }
    }
    let substring = str.substring(startIndex, longLength+startIndex)
    console.log("String: ", substring)
    return longLength
}

console.log(lengthOfLongestSubstring(s))