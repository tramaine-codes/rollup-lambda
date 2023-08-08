import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
// import esbuild from 'rollup-plugin-esbuild';

export default {
  input: 'src/lambda.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  external: ['oracledb'],
  plugins: [json(), commonjs(), typescript(), nodeResolve(), terser()],
  // plugins: [json(), commonjs(), esbuild(), nodeResolve()],
};
