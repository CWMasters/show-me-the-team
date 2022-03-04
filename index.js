const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArray = [];


const inputManager = () => {
    return inquirer.prompt([
        {
            type: 'type',
            name: 'name',
            message: "What is the Manager's name? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the Manager!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID number? (Required)",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's ID number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's email (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Manager's office number! (Required)",
            validate: officeNumberInput => {
                if(officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's office number!")
                    return false;
                }
            }
        }
    ])
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager (name, id, email, officeNumber);
        employeeArray.push(manager);
        return employeeArray;
    })
};

const inputEmployee = () => {
    console.log(`
    =============================
    Add an Employee to your team!
    =============================
    `);

    
    return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'Select the role of the Employee!(Required)',
        choices: ['Engineer', 'Intern'],
        validate: roleInput => {
            if(roleInput) {
                return true;
            } else {
                console.log("Please choose one of the options!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter name of the Employee (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the name of the Employee!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the Employee's ID number (Required)",
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log("Please enter the Employee's ID number!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the Employee's email (Required)",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter the Employee's email!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please add the Engineer's GitHub username (Required)",
        when: (selected) => {
            if (selected.role == "Engineer") {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter the School for the Intern! (Required)',
        when: (selected) => {
            if (selected.role == "Intern") {
                return true;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another Employee?',
        default: false
    }
  ])

  .then(response => {
    let { name, id, email, role, github, school, confirmAddEmployee } = response;
    let employee;
    
    if (role == 'Engineer') {
        employee = new Engineer (name, id, email, github);
    } else if (role == 'Intern') {
        employee = new Intern (name, id, email, school);
    }

    employeeArray.push(employee)

    if (confirmAddEmployee) {
        return inputEmployee()
    } else {
        return employeeArray;
    }
  })
};

// generate html
inputManager()
    .then(inputEmployee)
    // .then(console.log(employeeArray))
    // .then(employeeArray => {
    //     return generateHTML(employeeArray);
    // })
    .then(pageHTML => {
        return generateHTML.writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
    








    
   