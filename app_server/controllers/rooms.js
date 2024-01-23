const fs = require('fs');
const allRooms = JSON.parse(fs.readFileSync('./data/allRooms.json', 'utf8'));

const rooms = (req, res) => {
    pageTitle = 'Travlr Getaways - Rooms'
    res.render('rooms', {title: pageTitle, allRooms, highlight_rooms: true});
};

module.exports = {
    rooms
}