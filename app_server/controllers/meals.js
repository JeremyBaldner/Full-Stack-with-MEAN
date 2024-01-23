const fs = require('fs');
const food = JSON.parse(fs.readFileSync('./data/food.json', 'utf8'));

const meals = (req, res) => {
    pageTitle = 'Travlr Getaways - Meals'
    res.render('meals', {title: pageTitle, food, highlight_meals: true});
};

module.exports = {
    meals
}