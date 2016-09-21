var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/api/whoami', function (req, res) {
	jsonRes = {"ipaddress":null,"language":null,"software":null};



	res.end(JSON.stringify(jsonRes));	
});
app.get('/',function(req,res){
	res.sendFile('index.html');
});
app.listen(process.env.PORT || 8080, function () {
  console.log('Request Header Parser Microservice listening on port '+process.env.PORT||8080+'!');
});

