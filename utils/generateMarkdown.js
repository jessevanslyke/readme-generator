function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Contributing](#Contributing)

[Tests](#Tests)

[Questions](#Questions)

## Installation

\`\`\`bash
${data.installation}
\`\`\`

## Usage

\`\`\`bash
${data.usage}
\`\`\`

## License

${data.license}

## Contributing

${data.contributing}

## Tests

\`\`\`bash
${data.tests}
\`\`\`

## Questions

${data.questions}

My github profile: [github.com/${data.githubProfile}](github.com/${data.githubProfile})

My github email: ${data.githubEmail}

`;
}

module.exports = generateMarkdown;
