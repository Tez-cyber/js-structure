
// =========== First Approach
const stringCount = (str) => {
    const count = str.split("");

    const checkDuplicate = new Set(count);
    return checkDuplicate.size;
}



