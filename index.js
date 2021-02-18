const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = (answers) =>

// if (answers.licence === 'MIT'){
    
// const mitLicense = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// answers.license = mitLicense;
// } else if (answers.license === 'ISC') {
//     const iscLicense = [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
//     answers.license = iscLicense
// } else if (answers.license === 'MOZILLA'){

//     const mozillaLicense = [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// answers.license = mozillaLicense
// } else if (answers.license = 'ARTISTIC LICENSE'){
//     const artisticLicense = [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
//     answers.license = artisticLicense
// })

  `
  # TITLE: ${answers.name}

  ---

  # Table of contents

  [Title](#--answersname-)
[Description](#description)
[Installation Instructions](#installation-instructions)
[Usage](#usage)
          + [Screenshots of application](#screenshots-of-application)
[Contributions](#contributions)
[License](#license)
[Tests](#tests)
[Questions](#questions)

  # Description

  ${answers.description}

  ---

  # Installation Instructions

  ${answers.installation}

  ---

  # Usage

  ${answers.usage}
  ###### Screenshots of application

  ![${answers.alttextone}](${answers.imagelinkone})

  ![${answers.alttexttwo}](${answers.imagelinktwo})

  ![${answers.alttextthree}](${answers.imagelinkthree})

  ---

  # Contributions

  ${answers.contributions}

  ---

  # License

  ${answers.license}

  ---

  # Tests

  ${answers.text}

  ---

  # Questions

  ${answers.contactquestions}

  <${answers.email}>

  <https://${answers.github}>

  `;

//   if (answers.licence === 'MIT'){
    
//     const mitLicense = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//     answers.license = mitLicense;
//     } else if (answers.license === 'ISC') {
//         const iscLicense = [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
//         answers.license = iscLicense
//     } else if (answers.license === 'MOZILLA'){
    
//         const mozillaLicense = [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
//     answers.license = mozillaLicense
//     } else if (answers.license = 'ARTISTIC LICENSE'){
//         const artisticLicense = [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
//         answers.license = artisticLicense
//     }
    

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
        name: 'tests',
        message: 'What tests were performed on the application?',
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
