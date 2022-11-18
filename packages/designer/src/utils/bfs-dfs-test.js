function Node(key) {
	this.key = key;
	this.children = [];
}

let node = {};
function genNode() {
	let n1 = new Node('1node');
	let n2 = new Node('2node');
	let n3 = new Node('3node');
	let n4 = new Node('4node');
	let n5 = new Node('5node');
	let n6 = new Node('6node');

	n1.children.push(n2, n5);
	n2.children.push(n3, n4);
	n5.children.push(n6);

	node = n1;
	console.log(JSON.stringify(n1));
}

genNode();

let bfslist = [];
const BFS = (root) => {
	if (!root) return;
	let queue = [{ item: root, depth: 1 }];
	while (queue.length) {
		let node = queue.shift();
		bfslist.push({
			key: node.item.key,
			depth: node.depth
		});
		console.log(`${node.item.key}  ${node.depth}`);
		if (!node.item.children.length) {
			continue;
		}
		Array.from(node.item.children).forEach((item) => {
			queue.push({
				item,
				key: item.key,
				depth: node.depth + 1
			});
		});
	}
};

BFS(node);
console.log(bfslist);

let dfslist = [];
const DFS = function (node) {
	if (!node) return;
	let deep = arguments[1] || 1;
	dfslist.push({
		key: node.key,
		deep
	});
	if (!node.children.length) {
		return;
	}
	Array.from(node.children).forEach((item) => {
		DFS(item, deep + 1);
	});
};

DFS(node);
console.log(dfslist);
