const { execSync } = require('child_process');
const setOutput = require('./utils/set-output');
const path = require('path');
const args = require('./utils/get-args');

const main = async () => {
  try {
    const { root, projects } = args;
    if (!root || !projects) {
      throw new Error('asdasd');
    }
    await Promise.all(
      projects.split(',').map(
        (_project) =>
          new Promise(resolve => {
            execSync(
              `npm publish ${path.resolve(
                root,
                'dist',
                'libs',
                _project
              )} --@henryqrm:registry='https://npm.pkg.github.com' --access=public`,
              {
                stdio: 'inherit',
              }
            );

            resolve();
          })
      )
    );
  } catch (error) {}
};

main();
