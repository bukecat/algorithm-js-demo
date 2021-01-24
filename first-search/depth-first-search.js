const nodeList = require('./constants');

function dfs1(node, path = []) {
	path.push(node.name);

	if (node.children) {
		node.children.forEach((child) => {
			dfs1(child, path);
		})
	}

	return path;
}
console.log(dfs1(nodeList));



let dfs2 = (node, nodeList = []) => {
	if (node !== null) {
		nodeList.push(node.name)
		let children = node.children || [];
		for (let i = 0; i < children.length; i++) {
			dfs2(children[i], nodeList)
		}
	}
	return nodeList
}
console.log(dfs2(nodeList));



let dfs3 = (node) => {
	const stack = [];
	const path = [];

	stack.push(node);
	
	while(stack.length) {
		const cNode = stack.pop();
		path.push(cNode.name);
		
		const children = cNode.children || [];
		
		for (var i = children.length - 1; i >=0; i--) {
			stack.push(children[i]);
		}
	}
	
	return path;
}
console.log(dfs3(nodeList));
