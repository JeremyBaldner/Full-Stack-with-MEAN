const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways - News', highlight_news: true});
};

module.exports = {
    news
}