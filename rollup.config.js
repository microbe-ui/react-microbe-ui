// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

// -----------------------------------------------------------------------------
// Files
// -----------------------------------------------------------------------------

const distFolder = JSON.parse(process.env.BUILD_EXAMPLE || 'false') ? 'example/src/' : '';

const files = [
	{
		input: 'src/ModuleGrid/index.tsx',
		output: 'components/ModuleGrid/index.js',
		outputES: 'components/ModuleGrid/index.es.js'
	},
	{
		input: 'src/Spacer/index.tsx',
		output: 'components/Spacer/index.js',
		outputES: 'components/Spacer/index.es.js'
	},
	{
		input: 'src/blank.ts',
		output: 'components/blank.js',
		outputES: 'components/blank.js'
	}
];

// -----------------------------------------------------------------------------
// Config
// -----------------------------------------------------------------------------

export default files.map((file) => ({
	input: file.input,
	output: [
		{
			file: distFolder + file.output,
			format: 'cjs',
			exports: 'named',
			sourcemap: file.input !== 'src/blank.ts'
		},
		{
			file: distFolder + file.outputES,
			format: 'es',
			exports: 'named',
			sourcemap: file.input !== 'src/blank.ts'
		}
	],
	plugins: [
		external(),
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true,
			exclude: '**/__tests__/**',
			clean: true,
			tsconfigOverride: {
				compilerOptions: {
					declaration: file.input === 'src/blank.ts'
				}
			}
		}),
		commonjs({
			include: ['node_modules/**'],
			namedExports: {
				'node_modules/react/react.js': [
					'Children',
					'Component',
					'PropTypes',
					'createElement'
				],
				'node_modules/react-dom/index.js': ['render']
			}
		})
	]
}));
