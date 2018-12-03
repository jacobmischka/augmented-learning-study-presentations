import intro from './intro.mdx';
import bb from './buildings-and-bridges.mdx';
import buildings from './buildings.mdx';
import bridges from './bridges.mdx';
import closing from './closing.mdx';

export { default as theme } from './theme.js';

export default [
	...intro,
	...bb,
	...buildings,
	...bridges,
	...closing
];
