function add(numbers) {
	// if empty string return 0
    if (numbers === "") {
        return 0;
    }

    let delimiters = /,|\n/;
	// handle delimiters from string number
    if (numbers.startsWith("//")) {
        const delimiter = numbers[2];
        delimiters = new RegExp(delimiter);
        numbers = numbers.slice(4);
    }
	
    const nums = numbers.split(delimiters).map(Number);
    const negatives = nums.filter(num => num < 0);
	// if string contains Negative numbers then throw error
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
	// add all numbers in string
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
