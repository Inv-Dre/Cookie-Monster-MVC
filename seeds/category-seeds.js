const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Electronics',
    },
    {
        category_name: 'Health & Fitness'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;