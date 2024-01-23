const fs = require('fs');
const latestNews = JSON.parse(fs.readFileSync('./data/news/latestNews.json', 'utf8'));
const mainNews = JSON.parse(fs.readFileSync('./data/news/mainNews.json', 'utf8'));
const tips = JSON.parse(fs.readFileSync('./data/news/tips.json', 'utf8'));

const news = (req, res) => {
    pageTitle = 'Travlr Getaways - News'
    res.render('news', {title: pageTitle, latestNews, mainNews, tips, highlight_news: true});
};

module.exports = {
    news
}