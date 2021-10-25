const writeHeader = function(title){
  console.log(`\n\n >-------------------== [${title.toUpperCase()}]==-----------------------<`);
}

/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
writeHeader("TASK 1: ")

const sumOfTwoNums = function(num1, num2){
  if(num1 === num2){
    return 3*(num1 + num2)
  }else{
    return num1*num2
  }
}
console.log(sumOfTwoNums(2, 2))
/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

writeHeader("TASK 2: ")

const checkNum = function(int1, int2){
  if(int1 === 50 || int2 === 50 || (int1 + int2) === 50){
    return true
  }else{
    return "Error occured !!!";
  }
}
console.log(checkNum(2, 5));

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
writeHeader("TASK 3: ")



/* 4. Create a function to find and return the largest of three given integers. */
writeHeader("TASK 4: ")
const maxNum = function(firstNum, secondNum, thirdNum){
  if(firstNum > secondNum && firstNum > thirdNum){
    return "Max num is : " + firstNum
  }else if(secondNum > firstNum && secondNum > thirdNum){
    return "Max num is : " + secondNum
  }else{
    return "Max num is : " + thirdNum
  }
}
console.log(maxNum(24, 23, 4));

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100.
    Return `true` if they do, return `false` if one (or both) don't. */
writeHeader("TASK 5: ")
const isNumInRange = function(numfirst, numSecond){
  if(numfirst > 40 && numfirst < 60 || numfirst > 70 && numfirst < 100){
    return true
  }else if(numSecond > 40 && numSecond < 60 || numSecond > 70 && numSecond < 100){
    return true
  }else{
    return false
  }
}
console.log(isNumInRange(12, 34));
// ????????????????????????
/* 6. Create a function to create a new string composed of a specified number of copies of a given string.
    Pass the string and the number of copies as parameters. */
writeHeader("TASK 5: ")


/* 7. Create a function to display the city name if the string begins with "Los" or "New".
    Pass the city name as a parameter. Return `false` if they start with a different string. */
writeHeader("TASK 7: ")

const displayString = function(string){
  if(string.startsWith('Los') || string.startsWith('New')){
    return true
  }else{
    return false
  }
}
console.log(displayString("NewYork"));


/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements.
    Pass the array as a parameter. */
writeHeader("TASK 8: ")
// let arr = [1, 3, 5]
let sum = 0
const calArray = function(arr1){
  for(let i = 0; i < arr1.length; i++){
    sum += arr1[i]
  }
  return sum
}
console.log(calArray([3, 3, 5]));
/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3.
    Return `true` is it does, `false` if it doesn't. */
writeHeader("TASK 9: ") // check during debrief !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const testArray = function(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] === 1 || array[i] === 3){
      return true
    }else{
       return false
    }
  }
}
console.log(testArray([1, 3]));
/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3.
    Return `true` if it doesn't, `false` if it does. */
writeHeader("TASK 10: ")
const testSecondArray = function(array2){
  for(let i = 0; i < array2.length; i++){
    if(array2[i] != 1 && array2[i] != 3){
      return true
    }else{
       return false
    }
  }
}
console.log(testSecondArray([2, 3]));

/* 11. Create a function to find the longest string from a given array of strings.
    Pass the array as parameter and return the longest string. */
writeHeader("TASK 11: ")


const findLongestString = function(arrayOfString){
  let longestString = 0;
  for(let i = 0; i < arrayOfString.length; i++){
    if(arrayOfString[i].length > longestString){
      longestString = i
    }
  }
  return longestString
}
console.log(findLongestString(["ali", "mukhtor", "ikromovich"]));// output of largest string is shown as index  

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
writeHeader("TASK 12: ")

const calAngle = function(angle){
  if(angle > 0 && angle < 90){
    return "acute"
  }else if(angle === 90){
    return "right"
  }else if(angle > 90 && angle < 180){
    return "abtuse"
  }else if(angle === 180){
    return "straight"
  }else{
    return "error ocuured"
  }
}
console.log(calAngle(50));
console.log(calAngle(90));
console.log(calAngle(150));
console.log(calAngle(180));

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
writeHeader("TASK 13: ")

const indexOfGreatElement = function(numberOfArrays){
  let greatestNumber = 0;
  for(let i = 0; i < numberOfArrays.length; i++){
    if(numberOfArrays[i] > numberOfArrays[greatestNumber]){
      greatestNumber = i
    }
  }
  return greatestNumber
}
console.log(indexOfGreatElement([1, 34, 5, 67, 100]));


// ????????????????????????????????????????????????????????????????
/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
writeHeader("TASK 14: ")

const findLargestEven = function(numberOfArray){
  let evens = 0
  for(let i = 0; i < numberOfArray.length; i++){
    if(numberOfArray[i] % 2 === 0){
      evens = numberOfArray[i]
      console.log(evens);
      let largestEven = 0
      for(let j = 0; j < evens.length; j++){
        if(evens[j] > largestEven){
          largestEven = evens[j]
        }
      }
      console.log(largestEven);
    }
  }
}
console.log(findLargestEven([1, 3, 4, 6, 8]));
/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative.
    Return `true` if that's the case, return `false` if it's not. */
writeHeader("TASK 15: ")

const isPosOrNeg = function(number1, number2){
  if(number1 < 0 && number2 < 0){
    return false
  }else{
    return true
  }
}
console.log(isPosOrNeg(1, -3));

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case.
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
writeHeader("TASK 16: ")

const newString = function(string1){
  console.log(string1.substring(0, 3).toLowerCase() + string1.substring(3).toUpperCase());
  if(string1.length < 3){
    console.log(string1.substring(0, string1.length).toUpperCase());
  }
}
console.log(newString("aLimukhtor"));

/* 17. Create a function to calculate the sum of two integers (passed as parameters).
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
writeHeader("TASK 17: ")

const sumOfTwoInteger = function(integer1, integer2){
  if((integer1+integer2) > 50 && (integer1+integer2) < 80){
    return "65"
  }else{
    return "80"
  }
}
console.log(sumOfTwoInteger(25, 70));
/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example:
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number.
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names.
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */
writeHeader("TASK 18: ")

const convertToString = function(parameter){
  let factorOfGivenNum = [];
  for(let i = 0; i < parameter; i++){
    if(parameter % i === 0){
      factorOfGivenNum.push(i)
    }
  }
  return factorOfGivenNum
}
console.log(convertToString(12)); // now  i took the factors of given number. Not completed yet because of time management xD
/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
