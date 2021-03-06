
//\\Showing a node's child
//\\Your mission here is to create a showChild() function that shows one of the children of a DOM element node. This function takes as parameter the parent node and the child node index. Error cases like a non-element node or an out-of-limits index must be taken into account.

//\\Here's the associated HTML code.

//\\<h1>A title</h1>
//\\<div>Some text with <a href="#">a link</a>.</div>
//\\Complete the following program to obtain the expected results.

// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
const showChild = (node, index) => {

  if((index < 0)||(index >= document.body.childNodes.length)){
 
    console.error("Incorrect index");
 
  }
    else if (node === document.body.childNodes[index]){
 
      console.error("Wrong node type");
    }
 
    else {
 
    console.log(node.childNodes[index]);
    }
};

// Should show the h1 node
showChild(document.body, 1);

// Should show "Incorrect index"
showChild(document.body, -1);

// Should show "Incorrect index"
showChild(document.body, 4);

// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);
//\\Use console.error() rather than console.log() to display an error message in the console.