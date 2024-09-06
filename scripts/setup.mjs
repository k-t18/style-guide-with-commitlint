const fs = require('fs');
const path = require('path');
const prompts = require('prompts');

const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = require(packageJsonPath);

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'name',
    message: 'Project name:',
    initial: packageJson.name,
  });

  // Modify the package.json name field with the user's input
  packageJson.name = response.name;

  // Write the updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
})();
