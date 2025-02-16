/**
 * @param {string} text
 * @return {string}
 */

const reverseString = (text) => {
    const words = text.split(" ");
    const reversedWord = words.map((word) => {
        return word.split("").reverse().join("")
    });

    return reversedWord.join(" ")
}

console.log(reverseString("Hello World"))