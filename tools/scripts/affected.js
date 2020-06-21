const { execSync } = require('child_process');
const setOutput = require('./utils/set-output');
const args = require('./utils/get-args');

let { head, base } = args;

const main = () => {
  try {
    if (head) {
      console.log('Indentify Pull Request');
    }

    if (!base) {
      head = 'origin/master~1';
    }

    console.log('base: ', base);
    console.log('head: ', head);
    

    const stdio = execSync(
      `npx nx affected:libs --base=${base} --head=${head}`
    );

    const normalize = (stdio.toString().match(/- (.+)/gm) || []).map((_) =>
      _.replace('-', '').trim()
    );

    setOutput({
      nameEventOutput: 'nx_affected_libs',
      valueOutput: normalize,
    });
  } catch (error) {
    setOutput({
      nameEventOutput: 'nx_affected_libs',
      valueOutput: 'error',
    });
  }
};

main();
