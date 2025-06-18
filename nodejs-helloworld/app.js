var express = require('express');
app = express();
<secret>
app.get('/', function (req, res) {
  res.send('Webhook test');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
