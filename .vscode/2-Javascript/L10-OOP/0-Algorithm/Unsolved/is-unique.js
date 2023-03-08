// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
    const objMap = {};
    
    for (let number of arr) {
        if (objMap[number] === true) {
            return false;
        }
        objMap[number] = true
    }
    return true;
};
