const express = require('express');
const log = require('log-to-file');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text({
    type: 'text/html'
}));
app.use(bodyParser.text({
    type: 'text/plain'
}));

app.post('/', (req, res) => {
    const response = req.body;
    log(response, 'logs/logs.log');
    res.send(response);
});

app.listen(3000, () => {
    console.log('Server is on');
});