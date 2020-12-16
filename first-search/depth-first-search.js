const data = require('./constants');

function dfs(list) {
	const path = [];
	
	list.forEach((node) => {
		const search = (node) => {
			path.push(node.name);
			
			if (node.children) {
				search(node.children);
			}
		}
	})
	
	
}
