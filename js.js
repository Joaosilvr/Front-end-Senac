function aVeryBigSum(ar) {
    let num = []
    let sum = 0
    for(let i = 0; i < ar.length; i++){
        sum = sum + ar[i]
    }
    num.push(sum)
    return num
}
console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));
 