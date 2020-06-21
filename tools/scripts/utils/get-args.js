module.exports = process.argv
  .slice(2, process.argv.length)
  .reduce(
    (acc, _) => ({
      ...acc,
      ...(([key, value] = _.replace(/--/g, '').split('=')) => ({
        [key]: value,
      }))(),
    }),
    {}
  );
