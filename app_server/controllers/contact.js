const contact = (req, res) => {
    pageTitle = 'Travlr Getaways - Contacts'
    res.render('contact', {title: pageTitle, highlight_contact: true});
};

module.exports = {
    contact
}