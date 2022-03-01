const Engineer = require('../lib/Engineer.js')

// create Engineer object
test('creates Engineer object', () => {
    const engineer = new Engineer('Chris', 10, 'chrismasters_326@outlook.com', 'CWMasters');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

// gets github
test('creates github', () => {
    const engineer = new Engineer('Chris', 10, 'chrismasters_326@outlook.com', 'KJS');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

// get Engineer role
test('creates Engineer role', () => {
    const engineer = new Engineer('Chris', 10, 'chrismasters_326@outlook.com', 'CWMasters');
    expect(engineer.getRole()).toEqual('Engineer');
});