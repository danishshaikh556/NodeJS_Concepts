var isPrime = function(number)
{
    var i;
    for (i=2; i<number; i++) {
        if (number % i == 0 && i != number) return 0;
    }
    return 1;
}


var noPrime = function(k)
{
var j=2;
var i;
var arr=[];
for (i=0;i<k;i++)
{

if(isPrime(j)==1)
{
arr.push(j);
j++;
}
else
{
j++;
i=i-1;
}

}
return arr;
}

var print=function(arr)
{
return arr.join(",");
}

var no=100;

console.log(print(noPrime(no)));