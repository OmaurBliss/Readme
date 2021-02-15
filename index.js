const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>

  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${answers.name}</h1>
    <div class= "line">
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the  of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project. Please use technologies used',
      },
      {
        type: 'input',
        name: 'installation instructions',
        message: 'What are installation instructions?',
      },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateMD(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
