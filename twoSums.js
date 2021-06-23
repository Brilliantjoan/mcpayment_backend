const twoSums = (arr,target) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === target) {
                return [i,j]
            }
        }
    }
}
   
   
const arr = [2,7,11,15]
const target = 13
let result = twoSums(arr,target)
console.log(arr)
console.log(result)
