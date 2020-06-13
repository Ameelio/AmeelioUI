const path = require('path');
const docgenParser = require('react-docgen-typescript');
const pkg = require('../../package.json');
const root = path.resolve(__dirname, '../../')

module.exports = {
  title: `${pkg.productName}`,
  sections: [
    {
      name: 'Components',
      components: path.resolve(root, 'src/components/!(Container|Col|Row)*/*.{ts,tsx}'),
    },
    {
      name: 'Layout',
      components: path.resolve(root, 'src/components/{Container,Col,Row}/*.{ts,tsx}'),
    },
  ],
  ignore: [
    '**/index.ts',
    '**/index.tsx',
    '**/types.ts',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
  ],
  components: path.resolve(root, 'src/components/*/*.{ts,tsx}'),
  propsParser: docgenParser.parse,
  require: [path.resolve(root, 'src/scss/custom.scss')],
  styleguideDir: path.resolve(root, 'build/docs')
};