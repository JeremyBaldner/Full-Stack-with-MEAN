const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways - Rooms', highlight_rooms: true});
};

module.exports = {
    rooms
}