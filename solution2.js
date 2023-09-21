// you are given an array of strings which are all of equal length,
// find if strings have the same element at a common index,
// if they do, the function should return an array with three elements, 
// the indices of the strings with the same element occuring at the same index 
// and the endex of the common element
// 
const S = ["zzzz", "ferz", "zdsr", "fgtd"] 

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
            else if (charObject[char]){
               [ prevStr, prevChar] = charObject[char];
               if (prevStr === i){
                charObject[char] = [i,j]
               }
               else if (prevStr !== i && prevChar === j){
                return [prevStr, i, j]
               }
            }
        }
    }
    return []

}
console.log(solution(S))