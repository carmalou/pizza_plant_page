var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(__dirname);
});

app.get('/payload', function(req, res) {
  console.log('request ', req);
  console.log('response ', res);
  console.log('received a get at /payload!');
});

app.post('/payload', function(req, res) {
  console.log('received a post at /payload!');
  console.log('request ', req);
  console.log('response ', res);

});
