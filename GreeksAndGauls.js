// A utility function to populate an array based on a count and an action.
function populateArray(count, action) {
    const array = [];
    for (let i = 0; i < count; i++) {
        array.push(action(i));
    }
    return array;
}

// Generate names with a given prefix and count.
function generateNames(prefix, count) {
    return populateArray(count, (i) => `${prefix} ${i + 1}`);
}

// Combine two arrays into columns.
function createColumns(array1, array2) {
    return array1.concat(array2).map((item) => [item]);
}

// Perform Euclid's algorithm-based sorting.
function euclidSort(array, a, b) {
    const quotient = Math.trunc(a / b);
    const remainder = a % b;

    for (let qCount = 0; qCount < quotient; qCount++) {
        for (let i = 0; i < b; i++) {
            array[i] = array[i].concat(array.pop());
        }
    }

    // If the remainder is greater than 1, continue sorting recursively, otherwise, line up the columns.
    return remainder > 1 ? euclidSort(array, b, remainder) : lineUpColumns(array);
}

// Concatenate columns into a single array.
function lineUpColumns(sortedColumns) {
    return sortedColumns.reduce((result, column) => result.concat(column), []);
}

// Define the number of Gauls and Greeks.
const numGauls = 19;
const numGreeks = 12;

// Generate Gaul and Greek names.
const gauls = generateNames("Gaul", numGauls);
const greeks = generateNames("Greek", numGreeks);

// Combine the arrays into columns and perform Euclid's sorting.
const combinedArray = createColumns(gauls, greeks);
const sortedArray = euclidSort(combinedArray, numGauls, numGreeks);

// Display the sorted array.
console.log(sortedArray);
