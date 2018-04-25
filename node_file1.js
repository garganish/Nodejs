var fs=require("fs");
var http
fs.appendFile("myfile.txt","anish is gud",function(err)
{
	if (err) throw err;
	console.log("saved");
})