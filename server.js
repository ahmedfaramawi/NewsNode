var express = require('express');
const app = express(),
    port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const fs = require('fs');

let rawdata = fs.readFileSync('./models/index.json');
let articles = JSON.parse(rawdata);



app.listen(port);

console.log('News RESTful API server started on: ' + port);

app.get('/news', (req, res) => {
    return res.send(articles.articles);
});

app.get('/news/:newsId', (req, res) => {
    return res.send(articles.articles[req.params.newsId - 1]);
});


app.post('/news', (req, res) => {
    return res.send('Received a POST HTTP method');
});
app.put('/news/:newsId', (req, res) => {
    return res.send(
        `PUT HTTP method on news/${req.params.newsId} resource`,
    );
});

app.delete('/news/:newsId', (req, res) => {
    return res.send(
        `DELETE HTTP method on news/${req.params.newsId} resource`,
    );
});