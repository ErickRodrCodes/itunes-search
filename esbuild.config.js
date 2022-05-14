const esbuild = require('esbuild');
const { default: nodeExternalsPlugin } = require('esbuild-node-externals');
const { dtsPlugin } = require('esbuild-plugin-d.ts');

const commonConfig = {
  bundle: true,
  minify: true,
  sourcemap: 'external',
  entryPoints: ['src/index.ts'],
};

//node build
esbuild.build({
  ...commonConfig,
  platform: 'node',
  outfile: 'dist/node/index.js',
  tsconfig: './tsconfig.json',
});

// web
esbuild.build({
  ...commonConfig,
  format: 'iife',
  globalName: 'iTunesSearch',
  platform: 'browser',
  outfile: 'dist/web/index.js',
});

esbuild.build({
  ...commonConfig,
  outfile: 'dist/index.js',
  plugins: [dtsPlugin()],
});
