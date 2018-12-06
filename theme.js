import theme from 'mdx-deck/themes.js';

export default {
	...theme,

	// Customize your presentation theme here.
	//
	// Read the docs for more info:
	// https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
	// https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
	css: {},
	img: {
		maxHeight: '60vh',
		maxWidth: '100vw',
		display: 'block',
		margin: '0 auto',

		'&:first-child': {
			objectFit: 'contain',
			height: '100vh',
			width: 'auto'
		}
	}
}
