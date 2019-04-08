"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Todd Adcox Jr
   Date:   4-7-19

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/

// Global variables.
var nodeCount =0;
var elemCount = 0;
var textCount = 0;
var wsCount = 0;

// Runs the makeTree function when the page loads.
window.addEventListener("load", makeTree);

// Creates the node tree for the source article.
function makeTree() {
// 7. Within the makeTree() function, create the following aside element fragment
// <aside id=”treeBox”> <h1>Node Tree</h1>
// </aside> and append it to the section element with the ID “main”.
var treeBox = document.createElement("aside");
treeBox.id = "treeBox";
treeBox.innerHTML = "<h1>Node Tree</h1>";


// 8. The node tree will be created within an ordered list. Declare a variable named nodeList contain- ing the initial ol element node that will be the foundation of the node tree and append it to the aside element fragment.

// 9. The node tree will be based on the contents of the elements matching the CSS selector “#main article”. Declare a variable named sourceArticle that points to these elements. (Hint: Use the querySelectorAll() method.)

// 10. The contents of the node tree and the count of the different global variables will be updated using a function named makeBranches(), which you will create shortly. Call the makeBranches() function using the sourceArticle and nodeList variables as parameter values.
}


function isWhiteSpaceNode(tString) {
   return !(/[^\t\n\r ]/.test(tString));
}
