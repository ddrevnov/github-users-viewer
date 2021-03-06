var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')

module.exports = {
	context: path.join(__dirname, './src'),
	entry: {
		jsx: './index.js',
		vendor: ['react']
	},
	output: {
		path: path.join(__dirname, '/public/static/build/'),
		filename: 'bundle.js',
        publicPath: "/static/build/"
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.css$/,
				include: /src/,
				loaders: [
					'style-loader',
					'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'postcss-loader'
				]
			},
			{
				test: /\.css$/,
				exclude: /src/,
				loader: 'style!css'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: [
					'react-hot',
					'babel-loader',
					'eslint-loader'
				]
			},
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	postcss: [
		rucksack({
			autoprefixer: true
		})
	],
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
		})
	],
	devServer: {
		contentBase: './public',
		hot: true
	}
}
