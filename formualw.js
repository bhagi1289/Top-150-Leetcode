/* 
    C: 12, H:1, O:8
    Calculate atomic weight

    CH4 : 12+ (1*4) = 16
    H(CH4)2 : 1+ (12+(1*4))*2  = 33
*/

const calculateFormula = (formula) => {
    const weights = {'C':12, 'H':1, 'O':8};
    let stack = [];

    for(let i=0; i<formula.length; i++){

        let char = formula[i];

        if(char == '('){
             stack.push(char)
        }
        else if(char == ')'){
            let temp = 0;
            while(stack.length && stack[stack.length-1] !== '('){
                temp += stack.pop()
            }
            stack.pop();

            let multiplier = 0;

            if(i+1 < formula.length && !isNaN(formula[i+1])){
                multiplier = parseInt(formula[i+1])
                i++
            } else{
                multiplier = 1
            }

            stack.push(temp * multiplier)

        } else if(/[CHO]/.test(char)){

            let weight = weights[char];
            let num=1
            if(i+1 < formula.length && !isNaN(formula[i+1])){
                num = parseInt(formula[i+1])
                i++
            }else{
                num=1
            }

            stack.push(weight*num)
        }
    }

    return stack.reduce((a,b)=> a+b, 0);

}


console.log(calculateFormula('CH4'))
console.log(calculateFormula('H(CH4)2'))