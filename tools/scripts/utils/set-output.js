module.exports = ({ nameEventOutput, valueOutput }) => {
  process.stdout.write(`::set-output name=${nameEventOutput}::${valueOutput}`);
};
