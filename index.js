const app = require('express')();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    number: 1,
    name: 'John',
    gender: 'male'
  });
});


http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
