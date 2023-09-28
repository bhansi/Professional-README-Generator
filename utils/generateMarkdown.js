// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch(license) {
    case "Apache License 2.0":
      badge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
      break;
    case "GNU General Public License v3.0":
      badge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case "MIT License":
      badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "BSD 2-Clause \"Simplified\" License":
      badge = "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg";
      break;
    case "BSD 3-Clause \"New\" or \"Revised\" License":
      badge = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
      break;
    case "Boost Software License 1.0":
      badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
      break;
    case "Creative Commons Zero v1.0 Universal":
      badge = "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg";
      break;
    case "Eclipse Public License 2.0":
      badge = "https://img.shields.io/badge/License-EPL_2.0-red.svg";
      break;
    case "GNU Affero General Public License v3.0":
      badge = "https://img.shields.io/badge/License-AGPL_v3-blue.svg";
      break;
    case "GNU General Public License v2.0":
      badge = "https://img.shields.io/badge/License-GPL_v2-blue.svg";
      break;
    case "GNU Lesser General Public License v2.1":
      badge = "https://img.shields.io/badge/License-LGPL_v2.1-blue.svg";
      break;
    case "Mozilla Public License 2.0":
      badge = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
      break;
    case "The Unlicense":
      badge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch(license) {
    case "Apache License 2.0":
      link = "https://opensource.org/license/apache-2-0/";
      break;
    case "GNU General Public License v3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "MIT License":
      link = "https://opensource.org/license/mit/";
      break;
    case "BSD 2-Clause \"Simplified\" License":
      link = "https://opensource.org/license/bsd-2-clause/";
      break;
    case "BSD 3-Clause \"New\" or \"Revised\" License":
      link = "https://opensource.org/license/bsd-3-clause/";
      break;
    case "Boost Software License 1.0":
      link = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "Creative Commons Zero v1.0 Universal":
      link = "https://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case "Eclipse Public License 2.0":
      link = "https://www.eclipse.org/legal/epl-2.0/";
      break;
    case "GNU Affero General Public License v3.0":
      link = "https://www.gnu.org/licenses/agpl-3.0.en.html";
      break;
    case "GNU General Public License v2.0":
      link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "GNU Lesser General Public License v2.1":
      link = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
      break;
    case "Mozilla Public License 2.0":
      link = "https://www.mozilla.org/en-US/MPL/2.0/";
      break;
    case "The Unlicense":
      link = "https://choosealicense.com/licenses/unlicense/";
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "---None---") return "";
  else return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})\n`
}

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
  } = data;

  let markdown = renderLicenseSection(license);
  markdown += `# ${title}\n`;

  if(description) markdown += `## Description\n${description}\n`;

  markdown += "## Table of Contents\n";

  if(installation || usage || contribution || testing || license) {
    let postTOC = ""; // Content after the Table of Contents

    if(installation) {
      markdown += `[Installation](#installation)<br>`;

      postTOC += `## Installation\n${installation}\n`;
    }
    if(usage) {
      markdown += `[Usage](#usage)<br>`;
      
      postTOC += `## Usage\n${usage}\n`;
    }
    if(contribution) {
      markdown += `[Contribution](#contribution)<br>`;
      
      postTOC += `## Contribution\n${contribution}\n`;
    }
    if(testing) {
      markdown += `[Testing](#testing)<br>`;
            
      postTOC += `## Testing\n${testing}\n`;
    }
    if(license !== "---None---") {
      markdown += `[License](#license)<br>`;
            
      postTOC += `## License\nDistributed under the ${license.includes("License") ? license : `${license} license`}.<br>`;
      postTOC += `Please click the license badge at the top or [here](${renderLicenseLink(license)}) for more details.\n`;
    }

    markdown += `[Questions](#questions)<br>`;

    postTOC += `## Questions\n[GitHub](https://github.com/${username})`;
    postTOC += `<br>If you have any questions, you can reach me via my [email](${email}).\n`;

    markdown += `\n${postTOC}`;
  }
  else {
    markdown += `[Questions](#questions)\n`;
    markdown += `## Questions<br>[GitHub](https://github.com/${username})`;
    markdown += `<br>If you have any questions, you can reach me via my [email](mailto:${email}).\n`;
  }

  return markdown;
}

module.exports = { generateMarkdown };
