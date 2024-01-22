const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways - Meals', highlight_meals: true});
};

module.exports = {
    meals
}