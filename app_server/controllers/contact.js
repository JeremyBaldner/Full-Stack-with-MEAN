const contact = (req, res) => {
    res.render('contact', {title: 'Travlr Getaways - Contacts', highlight_contact: true});
};

module.exports = {
    contact
}