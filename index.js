// Practice with Arrow Functions before starting the Lab:
    // This also passes one of the Tests

const add = (parameter1, parameter2) => parameter1 + parameter2;

console.log(add(2,3));

    // If there are no curly braces in the function body, the arrow function has an implicit return & automatically returns the result of the last expression! 

    const nums = [1, 2, 3];
    const squares = nums.map(x => x ** 2);
    console.log(squares); 
    console.log(nums);


// Test 1
const divide = (divider1, divider2) => divider1 / divider2; 
divide(2000, 100);

// Test 2
const square = (arrogantNum) => arrogantNum * arrogantNum;
square(2); 

