/* Names: Erin Cole and Christina Cook
 * Project Name: Project Fortune Cookie
 * Filename: testFCTrie.js
 * Description: This file tests the FCTrie.js functions
 */

/* Constructor Name: FCTrie
 * Parameters: key
 * Description: this constructor defines the FCTrie
 */
function FCTrie(key) {
	this.key = key;
	this.value;
}

FCTrie.prototype.put = function(name, value) {
	var node = this,
		nemeLength = name.length,
		i = 0,
		currentLetter;
	for (i=0; i < nameLength; i++) {
		currentLetter = name[i];
		node = node[currentLetter] || (node[currentLetter] = new FCTrie(						currentLetter));
	}
	node.value = value;
	node.name = name;
};

FCTrie.prototype.get = function(name) {
	var node = this,
		nameLength = name.length,
		i, node;
	for (i=0; i < nameLength; ++i) {
		if (!(node = node[name[i]])) break;
	}
	return (i === nameLentgh) ? node.value : 'not found';
};

