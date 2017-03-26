/* Names: Erin Cole and Christina Cook
 * Project Name: Project Fortune Cookie
 * Filename: testFCTrie.js
 * Description: This file tests the FCTrie.js functions
 */


function testFCTrie() {
	var fileKey = testText.txt;
	var myFCTrie = new FCTrie(fileKey); 

	if(myFCTrie.value)
		alert('yay it worked!');
}

function testput(obj) {
	return obj == this;
}

function testget(obj) {
	FCTrie.put(obj);
	FCTrie.get(obj);

	if (obj == FCTrie.get(obj)) {
		alert('put node into trie');
	}
}
