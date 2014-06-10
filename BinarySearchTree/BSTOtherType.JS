
//Declaring count here will make it a private static function ie.it will have only one instance
var count =0;

function BST() {
    
//Declaring variables here will allow them to be accesesd by only the protoype functions (ex insert function wont be able to access dan)
    this._root = null;
 this.dan=9;
var fgf= 90;
    
}


//To make this private just put it into the  add  function
//Note in the current state it can be accessed;
  function insert (node,currNode){
        if(currNode == null   || currNode.data == node.data){
                currNode =node;
              console.log(count++);          
   //console.log(this.dan++)  ;  //will throw an error;
     console.log("added----" + currNode.data );
         }else if(currNode.data>node.data){ currNode.left = insert(node,currNode.left);}
           else {currNode.right = insert(node,currNode.right);}
           return currNode    
        }

//to make this Private put it in Inorder Traversal function
   function inOrderTraverse(currNode){

    if(currNode !=null){
         inOrderTraverse(currNode.left);
         console.log(currNode.val);
          inOrderTraverse(currNode.right);
          }
      }





   //Add to BST
   BST.prototype.add = function (data,val){

console.log(this.dan++); 
        //create a new item object, place data in
        var node = { 
                data: data,
                val  :val, 
                left: null,
                right:null 
            };
            
     this._root =    insert(node,this._root);
    };
    
   BST.prototype.rootreturn = function(){return this._root;};

   BST.prototype.inOrder =function(){
         inOrderTraverse(this._root);
        };
     



    //Interface
    module.exports =BST;