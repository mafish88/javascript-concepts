/**
 * ways of writing functions
 * 1. Function Declaration  
 * 2  Function Expression
 * 3  Anonymous Function
 * 4  Arrow Function
 */


// 1. Function Declaration

function twoSum(num1, num2){
    const sum = num1 + num2
    return sum
}
    const result = twoSum( 2, 4)
    console.log(result)

    // 2. Function Expression

    const twoSumJs = function(num1, num2){

        return num1 + num2  
    }
    const result2 = twoSumJs( 45, 5)
        console.log(result2)

    // 3. Anonymous Function
const myArray = []
   myArray.map (function (num1, num2){
        return num1 + num2
    })

    //4. Arrow Function

    const twoSumArrow = (num1, num2) => {
        return num1 + num2  
    
    }
     const result3 = twoSumArrow (66, 45)
     console.log(result3)
    // 4.1 Arrow Function- one liner

    const twoSumArrow3 = (num1, num2) => num1 + num2
    const result4 = twoSumArrow3 (78, 45)
    

    // write a function that takes in 2 numbers and returns the largerest number

  function largerestNumber(num1, num2){
        if (num1 > num2){
            return num1
        } else {
            return num2
        }

  }
    const result5 = largerestNumber(45, 78)
    console.log(result5)
 // store the result of the first function in a variable, then write another function that takes 
 // the result and multiplies it by 2

    function multiplyByTwo(num1){
        return num1 * 2
    
    }
    const result6 = multiplyByTwo(result5)
    console.log(result6)

    /**
 * The Problem
 * Write a program that takes one number and print the number.
 * If the number is multiple of 3 print “Fizz” instead of the number.
 * If the number is multiple of 5 print “Buzz” instead of the number.
 * If the number is multiple of both 3 and 5 print “FizzBuzz”.
 */

function fizzBuzz(num1){
    if (num1 % 3 === 0 && num1 % 5 === 0)
    return "FizzBuzz"
    else if (num1 % 3 === 0) {
        return "Fizz"
    }
    else if (num1 % 5 === 0) {
        return "Buzz"
    }
    else {
        return num1
    }
}
const result7 = fizzBuzz(3)
console.log(result7)
// given a string, return true if the string is a palindrome or false if it is not.

    function isPalindrome(str) {
        const reverseStr = str.split("").reverse().join("")
        if (str === reverseStr){
            return true
        } else {
            return false
        }
     }
        const result8 = isPalindrome("racecar")
        console.log(result8)

        // 5. Write a function that takes an array of numbers and moves all
        // of the 0s in the array to the beginning of the array then returns the new array.

        const array = [2, 4,0,7,11,0,2,0]
        function moveZeroes(arr){
            const newArr = []
            for (let i = 0; i < arr.length; i++){
                if (arr[i] === 0){
                    newArr.unshift(arr[i])
                } else {
                    newArr.push(arr[i])
                }
            }
            return newArr
        }
        const result9 = moveZeroes(array)
        console.log(result9)

        
