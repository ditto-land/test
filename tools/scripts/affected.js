const { execSync } = require('child_process')
const setOutput = require('./utils/set-output')
const args = require('./utils/get-args')

let { head, base } = args

const main = () => {
  try {
    if (head) {
      console.log('Indentify Pull Request')
    }

    if (!base) {
      base = 'origin/master~1'
    }

    const command = `npx nx affected:libs ${base ? `--base=${base}` : ''} ${
      head ? `--head=${head}` : ''
    }`

    console.log('base: ', base)
    console.log('head: ', head)
    console.log('command', command)

    const stdio = execSync(command)

    const normalize = (stdio.toString().match(/- (.+)/gm) || []).map((_) =>
      _.replace('-', '').trim()
    )

    setOutput({
      nameEventOutput: 'nx_affected_libs',
      valueOutput: normalize,
    })
  } catch (error) {
    setOutput({
      nameEventOutput: 'nx_affected_libs',
      valueOutput: 'error',
    })
  }
}

main()
