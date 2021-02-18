const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = (answers) =>

  `
  #${answers.name}

  ---
  #Description

  ${answers.description}

  ---
  #Installation Instructions

  ${answers.installation}

  ---
  #Usage

  ${answers.usage}
  ######Screenshots of application

  ![${answers.alttextone}](${answers.imagelinkone})

  ![${answers.alttexttwo}](${answers.imagelinktwo})

  ![${answers.alttextthree}](${answers.imagelinkthree})

  ---
  #Contributions

  ${answers.contributions}

  ---
  #License

  ${answers.license}


  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project. Please use technologies used',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the application installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Explain how your application will be used',
      },
      {
        type: 'input',
        name: 'imagelinkone',
        message: 'Enter url of screenshot 1',
      },
      {
        type: 'input',
        name: 'alttextone',
        message: 'Enter image text',
      },
      {
        type: 'input',
        name: 'imagelinktwo',
        message: 'Enter url of screenshot 2',
      },
      {
        type: 'input',
        name: 'alttexttwo',
        message: 'Enter image text for screenshot 2',
      },
      {
        type: 'input',
        name: 'imagelinkthree',
        message: 'Enter url of screenshot 3',
      },
      {
        type: 'input',
        name: 'alttextthree',
        message: 'Enter image text for screenshot 3',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Who has contributed to creating this application?',
      },
    {
      type: 'checkbox',
      message: 'What is the license for this application',
      name: 'license',
      choices: ['MIT', 'ISC', 'MOZILLA', 'ARTISTIC LICENSE'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
      },
      {
        type: 'input',
        name: 'contactquestions',
        message: 'What are instructions for contacting you with additional questions?',
      },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github URL?',
      },
  ])
  .then((answers) => {
    const readmePageContent = generateMD(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
