const path = require('path');
const docgenParser = require('react-docgen-typescript');
const pkg = require('../../package.json');
const root = path.resolve(__dirname, '../../')

module.exports = {
  title: `${pkg.productName}`,
  components: path.resolve(root, 'src/components/*/*.{ts,tsx}'),
  propsParser: docgenParser.parse,
  require: [path.resolve(root, 'src/scss/custom.scss')],
  styleguideDir: path.resolve(root, 'build/docs')
};