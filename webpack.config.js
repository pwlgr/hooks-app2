const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ]
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.min.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules!postcss-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};
