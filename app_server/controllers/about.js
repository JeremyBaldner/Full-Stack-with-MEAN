const about = (req, res) => {
    pageTitle = 'Travlr Getaways - About'
    res.render('about', {title: pageTitle, highlight_about: true});
};

module.exports = {
    about
}