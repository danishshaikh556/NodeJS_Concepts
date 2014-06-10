var circle= require('C:/cygwin/home/Danish556/Object and Classes Ex/circle.js');
var LinkedList =require('./Object and Classes Ex/linkedlist.js');
var yxs =  new circle(3,4,5);

console.log(yxs);

var ce =  circle(2,1,2);
var pe=new circle(9,8,8);

var list1 =  new LinkedList();
//Try this it wont work 
//var list1 = LinkedList();
list1.add(5);
list1.add(45);

console.log(list1.item(0));

var list2 = new LinkedList();
list2.add(34);
list2.add(334 );
console.log(list1.item(0) + "--" + list2.item(1));	