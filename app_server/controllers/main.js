const fs = require('fs');
const latestNews = JSON.parse(fs.readFileSync('./data/news/latestNews.json', 'utf8'));
const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));

const index = (req, res) => {
    pageTitle = 'Travlr Getaways'
    res.render('index', {title: pageTitle, latestNews, links, highlight_main: true});
};

module.exports = {
    index
}