const greetUser = require('./myModule.js');

const testName = 'Poornesh HR';

try {
    const greeting = greetUser(testName);
    console.log(greeting);
} catch (error) {
    console.error(error.message);
}
