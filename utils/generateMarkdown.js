const generateBadges = require("./stinkin_badges.js");

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(objData) {
return `
# Title
${objData.projtitle}

## Table of Contents

* [License](#license)
* [Links](#links)
* [Installation Instructions](#installation-instructions)
* [My Usage](#my-usage)
* [Technology Used](#technology-used)
* [Tests](#tests)
* [Mockups and Screenshots](#mockups-and-screenshots)
* [Questions](#questions)
* [Credits](#credits)
 
  
## License

* ${generateBadges.license}
  
## Links

* ${objData.links}
* ${objData.linksToo}
  
## Installation Instructions

\`\`\`
${objData.installa}
\`\`\`

## My Usage

${objData.usage}
  
## Technology Used

${objData.tech}
  
${objData.techAdd}
  
## Tests

${objData.tests}
  
## Mockups and Screenshots
  
  
## Questions

If you have any questions about this project, or happen to use this project, please reach out to me! 


## Credits

${objData.credits}

`;
}

module.exports = generateMarkdown;
