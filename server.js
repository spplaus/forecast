const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, 'dist')));
// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
