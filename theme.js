import theme from 'mdx-deck/themes.js';

export default {
	...theme,

	// Customize your presentation theme here.
	//
	// Read the docs for more info:
	// https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
	// https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
	css: {
		'& img': {
			maxWidth: '100vw',
			maxHeight: '60vh',
			display: 'block',
			margin: '0 auto'
		}
	}
}
