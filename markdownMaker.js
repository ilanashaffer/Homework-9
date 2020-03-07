function markdownMaker(data) {
    return `
  # Title
  ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.table_of_contents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}

  `;
  }
  
  module.exports = markdownMaker;
  