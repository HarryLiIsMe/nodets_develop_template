import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import deletePlugin from 'rollup-plugin-delete';

const isProduction = process.env.NODE_ENV === 'production';

export default {
    input: 'src/main.ts',
    output: [
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            sourcemap: isProduction ? false : true,
        },
        {
            file: 'dist/bundle.esm.js',
            format: 'esm',
            sourcemap: isProduction ? false : true,
        },
    ],
    plugins: [
        resolve({ extensions: ['.js', '.ts'] }),
        typescript({
            tsconfig: './tsconfig.json',
            tsconfigOverride: {
                compilerOptions: {
                    module: 'ESNext',
                },
            },
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        commonjs(),
        isProduction && terser(),
        deletePlugin({
            targets: 'dist/*',
            hook: 'buildStart',
        }),
    ],
    external: ['fs', 'path', 'http', 'https', 'os', 'url'],
};
