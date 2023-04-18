// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseType = license;
  let myLicense = ''
  if(licenseType === 'MIT') {
    myLicense =`![license](https://img.shields.io/badge/license-MIT-brightgreen)` //Where do i get the license badges?
  } else if (licenseType === 'Apache License 2.0') {
    myLicense =`![license](https://img.shields.io/badge/license-Apache%202.0-blue)`
  } else if (licenseType === 'Mozilla Public License 2.0') {
    myLicense = `![license](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-orange)`
  } else {myLicense =``}
  return myLicense 
};
// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.purpose}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)

## Installation
${data.installation}

## Usage 
${data.usage}

## Contributions
${data.contributions}

`;
}

module.exports = generateMarkdown;
