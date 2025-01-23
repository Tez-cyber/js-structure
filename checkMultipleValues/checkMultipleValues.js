
// =========== First Approach
const stringCount = (str) => {
    const count = str.split("");

    const checkDuplicate = new Set(count);
    return checkDuplicate.size;
}


// ============= Second Approach
const imperativeCount = (str) => {
    const uniqueArr = [];
    const count = str.split("");

    for(let i = 0; i < count.length; i++) {
        if(uniqueArr.indexOf(str[i]) === -1) {
            uniqueArr.push(str[i]);
        }
    }

    return uniqueArr;
}

// ================== Third Approach
const checkDuplicate = (str) => {
    const count = str.split("");
    const uniqueArr = [];

    for(let i = 0; i < count.length; i++) {
        if(!uniqueArr.includes(str[i])) {
            uniqueArr.push(str[i])
        }
    }

    return uniqueArr
}
console.log(checkDuplicate("ababaccdddaaabbbadddaddds"))

