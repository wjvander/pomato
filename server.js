const express = require('express');
app = express();

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(3000);

