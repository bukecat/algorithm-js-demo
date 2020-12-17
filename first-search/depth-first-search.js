const data = require('./constants');

function dfs1(node, path = []) {
	path.push(node.name);

	if (node.children) {
		node.children.forEach((child) => {
			dfs1(child, path);
		})
	}

	return path;
}
console.log(dfs1(data));



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
console.log(dfs2(data));



let dfs3 = () => {
	const stack = [];
	const path = [];

	stack.push()
}
