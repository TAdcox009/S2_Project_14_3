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
var nodeCount = 0;
var elemCount = 0;
var textCount = 0;
var wsCount = 0;

// Runs the makeTree function when the page loads.
window.addEventListener("load", makeTree);

// Creates the node tree for the source article.
function makeTree() {

      // Creates an aside element and appends it to the section element with the ID of main.
      var treeBox = document.createElement("aside");
      treeBox.id = "treeBox";
      treeBox.innerHTML = "<h1>Node Tree</h1>";

      var sectionElem = document.getElementById("main");
      sectionElem.appendChild(treeBox);

      // 8. The node tree will be created within an ordered list. Declare a variable named nodeList containing the initial ol element node that will be the foundation of the node tree and append it to the aside element fragment.
      var nodeList = document.createElement("ol");
      treeBox.appendChild(nodeList);

      // 9. The node tree will be based on the contents of the elements matching the CSS selector “#main article”. Declare a variable named sourceArticle that points to these elements. (Hint: Use the querySelectorAll() method.)
      var sourceArticle = document.querySelector("#mainarticle");

      // 10. The contents of the node tree and the count of the different global variables will be updated using a function named makeBranches(), which you will create shortly. Call the makeBranches() function using the sourceArticle and nodeList variables as parameter values.
      makeBranches(sourceArticle, nodeList);

      document.getElementById("totalNodes").textContent = nodeCount;
      document.getElementById("elemNodes").textContent = elemCount;
      document.getElementById("textNodes").textContent = textCount;
      document.getElementById("wsNodes").textContent = wsCount;
}

// 11. Create the makeBranches() function that will be used to append node branches to the node tree diagram. The function will have two parameters named treeNode and nestedList. The treeNode parameter stores the current node from the source article and the nestedList parameter stores the structure of the node tree displayed in the web page. Add the commands described in Steps 12 through 17 to the function.
function makeBranches(treeNode, nestedList) {
      // 12. Each time the makeBranches() function is called, it is because a new node has been discovered in the source article. Increase the value of the nodeCount variable by 1.
      nodeCount++;

//       13. Create the following list item HTML fragment, storing the list item element in the lielem variable and the span element node in the spanelem variable:
// <li> 
//       +--<span></span>
// </li>
var liElem = document.createElement("li");
liElem.innerHTML = "+--";
var spanElem = document.createElement("span");
liElem.appendChild(spanElem);
nestedList.appendChild(liElem);

if (treeNode.nodeType === 1) {
   elemCount++;
   spanElem.setAttribute("class", "elementNode");
   spanElem.textContent = "<" + treeNode.nodeName + ">";
} else if (treeNode.nodeType === 3) {
   textCount++;
   var textString = treeNode.nodeValue;


   if (isWhiteSpaceNode(textString)) {
         wsCount++;
         spanElem.setAttribute("class", "whiteSpaceNode");
         spanElem.textContent = "#text";
   } else {
         spanElem.setAttribute("class", "textNode")
         spanElem.textContent = textString;
   }
}
if (treeNode.childNodes.length > 0) {
   var newList = document.createElement("ol");
   newList.innerHTML = "|";
   nestedList.appendChild(newList);
   for (var n = treeNode.firstChild; n !== null; n = n.nextSibling) {
         makeBranches(n, newList);
      }
   }
}


function isWhiteSpaceNode(tString) {
      return !(/[^\t\n\r ]/.test(tString));
}