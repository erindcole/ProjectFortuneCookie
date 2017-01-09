/* Names: Erin Cole and Christina Cook
 * Filename: FCTrie.java
 * Description: This class is responsible for building the trie that connects
 * 		the fortune databases.
 */

public class FCTrie {
     private FCNode root;

     public FCTrie(FCNode root) {
          root = new FCNode();
     }
     public boolean insert(String[] children) {
          return false;
     }
     public boolean find(String[] children) {
          return false;
     }
     //should this be a reference to an array?
     public class FCNode {
          private String[] children;
         
          public FCNode() {} 
     }

}     

