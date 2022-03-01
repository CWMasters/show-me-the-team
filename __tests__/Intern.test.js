const Intern = require('../lib/Intern.js')

// creates Intern object
test('creates Intern object', () => {
    const intern = new Intern('Chris', 10, 'chrismasters_326@outlook.com', 'KJS');
    expect(intern.getSchool()).toEqual(expect.any(String));
});

// gets school
test('creates school', () => {
    const intern = new Intern('Chris', 10, 'chrismasters_326@outlook.com', 'KJS');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

// gets Intern role
test('creates Intern role', () => {
    const intern = new Intern('Chris', 10, 'chrismasters_326@outlook.com', 'KJS');
    expect(intern.getRole()).toEqual('Intern')
})

