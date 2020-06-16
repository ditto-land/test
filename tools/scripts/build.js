const { execSync } = require('child_process');
const setOutput = require('./utils/set-output');
const args = require('./utils/get-args');

const main = () => {
  try {
    const { projects } = args;

    if (projects) {
      throw new Error('Não foi possível identificar o projeto');
    }

    execSync(
      `npx nx run-many --target build --with-deps --projects ${projects}`,
      {
        stdio: 'inherit',
      }
    );

    setOutput({
      nameEventOutput: 'nx_build_libs',
      valueOutput: 'success',
    });
  } catch (error) {
    setOutput({
      nameEventOutput: 'nx_build_libs',
      valueOutput: 'error',
    });
  }
};

main();
