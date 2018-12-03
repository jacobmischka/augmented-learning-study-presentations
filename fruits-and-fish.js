import intro from './intro.mdx';
import ff from './fruits-and-fish.mdx';
import fruits from './fruits.mdx';
import fish from './fish.mdx';
import closing from './closing.mdx';

export { default as theme } from './theme.js';

export default [
	...intro,
	...ff,
	...fruits,
	...fish,
	...closing
];
