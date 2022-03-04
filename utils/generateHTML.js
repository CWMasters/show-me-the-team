const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        console.log(fileContent)
        fs.writeFile('./dist/index.html', JSON.stringify(fileContent), err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

// function generatePage () {}

// pass in generatePage
module.exports = {writeFile};
