const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public/`));

app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(app.get('port'), () => {
  console.log(`server listening on port: ${app.get('port')}`);
});
