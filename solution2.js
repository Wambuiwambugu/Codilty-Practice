// you are given an array of strings which are all of equal length,
// find if strings have the same element at a common index,
// if they do, the function should return an array with three elements, 
// the indices of the strings with the same element occuring at the same index 
// and the endex of the common element
// 
const S = ["abc", "bca", "dbe"] 

function solution(S){
    let charObject = {};

    for (let i = 0; i < S.length; i++){
        const string = S[i];
        console.log(string)
        for (let j = 0; j < string.length; j++){
            const char = string[j];
            // console.log(char)
            if (!charObject[char]){
                charObject[char] = [i,j];
                console.log(charObject)
            }
            else {
               [ prevStr, prevChar] = charObject[char];
            //    console.log(charObject)

               if (prevStr !== i && prevChar === j){
                return [prevStr, i, j]
               }
            }
        }
    }
    return []

}
console.log(solution(S))