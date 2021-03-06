//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

// function twoSum (array, target) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

function twoSum (array, target) {
    let hash = {};
    array.forEach((val, index)=>{
        hash[val] = index;
    });
    for (let i = 0; i < array.length; i++) {
        if (hash[target - array[i]]) {
            return [ i, hash[target - array[i]] ];
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9), ' Should equal [ 0, 1 ]');
console.log(twoSum([31, 2, 3, 4, 5, 6, 7, 29], 31), ' Should equal [ 1, 7 ]');