const travel = (req, res) => {
    pageTitle = 'Travlr Getaways - Travel';
    res.render('travel', {title: pageTitle, highlight_travel: true});
};

module.exports = {
    travel
}