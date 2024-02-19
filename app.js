const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.listen(port, () => console.log('\x1b[36m%s\x1b[0m', `app on port http://localhost:${port} !`))

app.get(/^(.+)$/, function(req, res){ 
	console.log('static file require: ' + req.params);
	res.sendFile(__dirname + req.params[0]);
});
