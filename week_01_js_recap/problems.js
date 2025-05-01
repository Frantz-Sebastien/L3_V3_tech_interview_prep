// Reverse a string
function reverseString(str) {
    let reverseArray = []
    for(let i = str.length - 1; i >= 0; i--){
        reverseArray.push(str[i])
    }

    return reverseArray.join("")
}
 
// Find max in array
function findMax(arr) {
    // return Math.max(...arr)
    let max = arr[0]
    

    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }

    return max
}

// Check if palindrome
function isPalindrome(word) {
    let left = 0
    let right = word.length - 1
    while(left < right){
        if(word[left] !== word[right]){
            return false
        }
        left++
        right--
    }
    return true
}

module.exports = { reverseString, findMax, isPalindrome };
