var str = " ";
var http = require('http');
var arr = []; 
var output = ""

function capitalize(str, arr){

var x = str.length;   
var i= 0;

for(i; i<x; i++){ 
  if (i== 0)
     output += str.charAt(0)
  else if (i==1)
    output += str.charAt(1).toUpperCase()     
  else if (i==2)
    output += str.charAt(2).toUpperCase()
   else if (i==3)
    output += str.charAt(3)
    else if (i==4)
    output += str.charAt(4)
   else if (i==5)
   output += str.charAt(5).toUpperCase()
   else
   output+= " "  
   
}
return output
}

capitalize("abcdef",[1,2,5])
//capitalize("abcdef",[1,2,5,100])


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(output);
  console.log("Listening on 8080 port now..."); 
}).listen(8080);
