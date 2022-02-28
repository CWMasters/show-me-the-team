const Employee = require('../lib/Employee.js')

// creating employee object
test('creates an employee object', () => {
    const employee = new Employee('Chris', 10, 'chrismasters_326@outlook.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

/// get name
test('gets name of employee', () => {
    const employee = new Employee('Chris', 10, 'chrismasters_326@outlook.com');
    expect(employee.name).toEqual(expect.any(String));
});

// get ID
test('gets employee ID', () => {
    const employee = new Employee('Chris', 10, 'chrismasters_326@outlook.com');
    expect(employee.id).toEqual(expect.any(Number));
});

// get Email
test('gets employee email', () => {
    const employee = new Employee('Chris', 10, 'chrismasters_326@outlook.com');
    expect(employee.email).toEqual(expect.any(String));
});

// get Role
test('gets employee role', () => {
    const employee = new Employee('Chris', 10, 'chrismasters_326@outlook.com');
    expect(employee.role).toEqual('Employee');
});