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

const files = [
	{
		input: 'src/ModuleGrid/index.tsx',
		output: 'components/ModuleGrid/index.js',
		outputES: 'components/ModuleGrid/index.es.js'
	}
];

// -----------------------------------------------------------------------------
// Config
// -----------------------------------------------------------------------------

export default files.map((file) => ({
	input: file.input,
	output: [
		{
			file: file.output,
			format: 'cjs',
			exports: 'named',
			sourcemap: true
		},
		{
			file: file.outputES,
			format: 'es',
			exports: 'named',
			sourcemap: true
		}
	],
	plugins: [
		external(),
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true,
			exclude: '**/__tests__/**',
			clean: true
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