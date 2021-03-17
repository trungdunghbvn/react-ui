import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url'
import {styles} from './config/rollup/plugin-styles';
import {generateScopedName} from './config/rollup/namespaced-classname';
import packageJSON from './package.json';

const root = __dirname;

const externalPackages = [
  ...Object.keys(packageJSON.dependencies),
  ...Object.keys(packageJSON.peerDependencies),
];

function external(id) {
  return externalPackages.some((aPackage) => id.startsWith(aPackage));
}

export default {
  input: `${root}/src/index.js`,
    output: [
      {format: 'cjs', file: `${root}/dist/index.js`},
      {format: 'esm', dir: `${root}/dist/esm`, preserveModules: true},
    ],
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    styles({
      mode: 'standalone',
        output: 'styles.css',
        modules: {
          generateScopedName: generateScopedName({includeHash: false}),
        },
    }),
    image(),
    url(),
    babel({
      extensions: ['.js', '.jsx'],
      envName: 'production',
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    commonjs()
  ],
  external
}
