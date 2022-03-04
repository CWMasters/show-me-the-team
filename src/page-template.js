
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







