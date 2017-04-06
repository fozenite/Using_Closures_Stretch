
// WRAP LOG TAKES IN A FUNCTION/ CALLBACK AND A STRING
// ADDITIONALLY LOGS THE NAME , INPUT PARAMETERS, AND RETURN VALUES
// OF THE CALLBACK FUNCTION

var wrapLog = function (callback, name) {
  /* your code here */
   // result = callback.apply(callback,arguments);
    //console.log(result);
    return function(){


       var args = Array.prototype.slice.call(arguments);
       var args = [].slice.call(arguments);

        result = callback.apply(callback,arguments);
        console.log(name+"("+ args[0] + "," + args[1] + ")" + " => " + result);

    };

};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");


logSum(5,3);
logSum(2,3);
logSum(5,4);
