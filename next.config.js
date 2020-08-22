const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
	withSass({
		webpack(config, options) {
			config.module.rules.push({
				test: /\.(png|woff|woff2|eot|ttf|gif|jpg|ico|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name]_[hash].[ext]',
					publicPath: `/_next/static/files`,
					outputPath: 'static/files',
				},
			});

			return config;
		},
	}),
);
