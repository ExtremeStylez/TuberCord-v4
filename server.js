const express = require('express');

const app = express();
const port = 7397 || 3064

app.get('/', (req, res) => {
	res.status(200).send('Online');
});

app.listen(port, () => console.log('Server Running!'));