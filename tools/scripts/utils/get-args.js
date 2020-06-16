module.exports = process.argv
  .slice(2, process.argv.length)
  .join(',')
  .split(' ')
  .reduce(
    (acc, _) => ({
      ...acc,
      ...(([key, value] = _.replace('--', '').split('=')) => ({
        [key]: value,
      }))(),
    }),
    {}
  );
