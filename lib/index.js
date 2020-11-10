/* Dmitriy (kard) Karmalita
  webpack drop loader (v.0.1.1)
  == change log ==
  v20201105:
    + apply option
    + log option
  v.0.1.1 - initial
 */

const loaderUtils = require('loader-utils');

function getOptions(that) {
  return Object.assign(
    {},
    { apply: true, log: false }, // defaultOptions,
    loaderUtils.getOptions(that),
  );
}

module.exports = function (content) {
  const options = getOptions(this);
  if (!options.apply) { return content; }
  // eslint-disable-next-line no-console
  if (options.log) { console.info(`${options.apply ? '' : '[dry run] '}dropped:`, this.resourcePath); }
  return 'module.exports = {}';
};
