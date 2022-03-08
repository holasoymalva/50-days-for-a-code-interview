// input = [1,2,3,4,10,11]
// function simpleArraySum(ar) {
//     // Write your code here
//     let temp = 0;
//     ar.forEach(element => {
//         temp += element;
//     });
//     return temp;
// }

input_a = [5,6,8]
input_b = [3,6,10]

input_a = [17,28,30]
input_b = [99,16,8]



function compareTriplets(a, b) {
    // Write your code here
    let score = [0,0];
    for(let index = 0 ; index < a.length; index++ ){
        if ( a[index] > b[index]) {
            score[0] = score[0] + 1;
        } if (a[index] < b[index]) {
            score[1] = score[1] + 1;
        }
    }
    return score;
}

console.log(
    compareTriplets(input_a, input_b)
)
