import * as fs from 'fs';
import * as path from 'path';
import prompts from 'prompts';

// Define the shape of package.json
interface PackageJson {
  name: string;
  version?: string;
  description?: string;
  [key: string]: unknown; // Allow other unknown fields
}

const packageJsonPath = path.join(process.cwd(), 'package.json');

// Read and parse package.json
const packageJson: PackageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

(async () => {
  // Prompt the user for the project name
  const response = await prompts({
    type: 'text',
    name: 'name',
    message: 'Project name:',
    initial: packageJson.name,
  });

  // Modify the `package.json` name field with the user's input
  packageJson.name = response.name;

  // Write the updated package.json back to the file
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
})();
