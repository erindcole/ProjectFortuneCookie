/* Names: Erin Cole and Christina Cook
 * Filename: test_FCTrie.java
 * Description: unit test for FCTrie.java
 */


class test_FCTrie {

void test_insert(String[] trieNode) {
       
     FCTrie myTrie = new FCTrie(null);
     myTrie.insert(trieNode);
}

void test_find(String[] trieNode) {
     FCTrie findTrie = new FCTrie(null);
     findTrie.find(trieNode);
}

int databaseSize = 40;
String[] trieNode = new String[databaseSize];

void main() {
     test_insert(trieNode);         
     test_find(trieNode);
}
}
