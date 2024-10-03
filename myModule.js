function greetUser(name) {
    if (!name || typeof name !== 'string') {
        throw new Error('Invalid input. Please provide a valid name.');
    }
    return `Hello, ${name}!`;
}

module.exports = greetUser;
