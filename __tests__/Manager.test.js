const Manager = require('../lib/Manager.js')

// create Manager Object
test('creates Manager object', () => {
    const manager = new Manager('Chris', 10, 'chrismasters_326@outlook.com', 623);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

// get Manager role
test('creates Manager role', () => {
    const manager = new Manager('Chris', 10, 'chrismasters_326@outlook.com', 623);
    expect(manager.getRole()).toEqual('Manager');
});