// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let { 
    title,
    description,
    installation,
    usage,
    contribution,
    testing,
    license,
    username,
    email
  } = data
  let markdown = `# ${title}`;

  if(description) markdown += `\n\n## Description\n\n${description}`;

  markdown += "\n\n## Table of Contents\n";

  if(installation || usage || contribution || test) {
    let postTOC = ""; // Content after the Table of Contents

    if(installation) {
      markdown += "\n[Installation](#installation)";

      postTOC += "\n\n<a name='installation'/>";
      postTOC += `\n## Installation\n\n${installation}`;
    }
    if(usage) {
      markdown += "\n[Usage](#usage)";
      
      postTOC += "\n\n<a name='usage'/>";
      postTOC += `\n## Usage\n\n${usage}`;
    }
    if(contribution) {
      markdown += "\n[Contribution](#contribution)";
      
      postTOC += "\n\n<a name='contribution'/>";
      postTOC += `\n## Contribution\n\n${contribution}`;
    }
    if(testing) {
      markdown += "\n[Testing](#testing)";
            
      postTOC += "\n\n<a name='testing'/>";
      postTOC += `\n## Testing\n\n${testing}`;
    }

    markdown += "\n[Questions](#questions)";

    postTOC += "\n\n<a name='questions'/>";
    postTOC += `\n## Questions\n\n[GitHub](https://github.com/${username})`;
    postTOC += `\nIf you have any questions, you can reach me via my [email](${email}).`;

    markdown += postTOC;
  }
  else {
    markdown += "\n[Questions](#questions)";
    markdown += "\n\n<a name='questions'/>";
    markdown += `\n## Questions\n\n[GitHub](https://github.com/${username})`;
    markdown += `\nIf you have any questions, you can reach me via my [email](${email}).`;
  }

  return markdown;
}

module.exports = { generateMarkdown };
