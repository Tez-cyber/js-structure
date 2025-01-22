/*
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    ==  Open brackets must be closed by the same type of brackets.
    == Open brackets must be closed in the correct order.



Example 1:
Input: s = "()"
Output: valid

Example 2:
Input: s = "()[]{}"
Output: valid

Example 3:
Input: s = "(]"
Output: invalid

Example 4:
Input: s = "([)]"
Output: invalid

Example 5:
Input: s = "{[]}"
Output: valid

*/

const isValid = (passedString) => {
    let stack = [];
    let bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    // For loop to check each values passed in the function call
    for (let eachChar of passedString) {
        // check is char is an object key in bracketPair
        if (bracketPairs[eachChar]) {
            /** Check the length of stack
             * Compare the last value of stack to char
             */
            if(stack.length > 0 && stack[stack.length - 1] === bracketPairs[eachChar]) {
                stack.pop()
            }
        } else {
            /**
             * if its not an object key in bracketPairs,
             *  push into stack array
             */
            stack.push(eachChar)
        }
    }

    return stack.length === 0 ? "valid" : "invalid"
}

console.log(isValid("()")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(]"));     
console.log(isValid("([)]"));   
console.log(isValid("{[]}"));    