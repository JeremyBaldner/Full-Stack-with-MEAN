const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', highlight_main: true});
};

module.exports = {
    index
}