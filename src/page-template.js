const generateManager = function(manager) {
    return`
    <div>
      <div>
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
      </div>
      <div>
        <p>ID:${manager.id}</p>
        <p>Email:<a href="mailto:${manager.email}"${manager.email}</a></p>
        <p>Office Number:${manager.officeNumber}</p>
      </div>
    </div>
    `;
};

const generateEngineer = function(engineer) {
    return`
    <div>
      <div>
        <h2>${engineer.name}</h2>
        <h3></h3>
      </div>
      <div>
        <p>ID:${engineer.id}</p>
        <p>Email:<a href="mailto:${engineer.email}"${engineer.email}</a></p>
        <p>GitHub Username:<a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
      </div>
    </div>
    `;
};

const generateIntern = function(intern) {
    return`
    <div>
      <div>
        <h2>${intern.name}</h2>
        <h3></h3>
      </div>
      <div>
        <p>ID:${intern.id}</p>
        <p>Email:<a href="mailto:${intern.email}"${intern.email}</a></p>
        <p>School:${intern.school}</p>
      </div>
    </div>
    `;
};

const pageTemplate = function (empCards) {
  return`
  
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Me The Team</title>
</head>
<body>
  <header>
    <div>
     <h1>Show Me The Team</h1>
    </div>
  </header>

  <main>
    <div class="container">
      <div class="row justify-content-center">
       ${empCards}
      </div>
    </div>
  <main>    

</body>
</html>
`;
};


module.exports = pageTemplate;