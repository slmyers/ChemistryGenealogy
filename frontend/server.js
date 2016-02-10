var express = require('express'),
    app     = express();

app.use(express.static('./web'));
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/web/index.html');
});
app.listen(5000);
console.log('listening on localhost:5000');
