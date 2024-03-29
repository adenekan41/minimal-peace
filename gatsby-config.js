module.exports = {
	siteMetadata: {
		title: `Hi, I am Adenekan Peace.`,
		description: `I believe design psychology and extensive/detailed research can be used to create stunning interfaces that user can easily interact with user no matter the Design Techniclaity. I call it Conceptual Minimalism.`,
		author: `@codewonders`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images/`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
		`gatsby-plugin-transition-link`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Minimalist Peace`,
				short_name: `Peace`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#000000`,
				display: `standalone`,
				icon: `src/assets/images/peace.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-plugin-offline',
			options: {
				workboxConfig: {
					globPatterns: ['**/*'],
				},
			},
		},
	],
};
