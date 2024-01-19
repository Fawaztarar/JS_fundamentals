const addToBatch = (array, number) => {
    // Check if the array's length is 5 or greater
    if (array.length >= 5) {
        // If so, return the array untouched
        return array;
    }

    // Use .concat to add the number to the array and return the new array
    return array.concat(number);
};

// Example usage:
const batch = [1274, 1275, 1276, 1277, 1278];
const newBatch = addToBatch(batch, 1279);

console.log(newBatch); // Output: [1274, 1275, 1276, 1277, 1278]

// module.exports = addToBatch;