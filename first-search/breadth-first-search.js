const nodeList = require('./constants');

const bfs = (node) => {
	const stack = [];
	const path = [];
	
	stack.push(node);
	
	while (stack.length) {
		const cNode = stack.shift();
		path.push(cNode.name);
		
		const children = cNode.children || [];
		
		children.forEach((item) => {
			stack.push(item);
		})
	}
	
	return path;
}
console.log(bfs(nodeList));
