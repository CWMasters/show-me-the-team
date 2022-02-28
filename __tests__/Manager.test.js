const Manager = require('../lib/Manager.js')

test('creates Manager object', () => {
    const manager = new Manager('Chris', 10, 'chrismasters_326@outlook.com', 623);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('creates Manager role', () => {
    const manager = new Manager('Chris', 10, 'chrismasters_326@outlook.com', 623);
    expect(manager.role).toEqual('Manager');
});