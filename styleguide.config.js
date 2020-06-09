const path = require('path');
const docgenParser = require('react-docgen-typescript');
const root = path.resolve(__dirname, '.')

module.exports = {
  components: path.resolve(root, 'src/components/*/*.{ts,tsx}'),
  propsParser: docgenParser.parse,
  require: [path.resolve(root, 'src/scss/custom.scss')],
};
