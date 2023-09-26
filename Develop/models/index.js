const Category = require('./Category');
const Product = require('./Product');
const Order = require('./Order');
const User = require('./User');
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});
Order.belongsTo(Customer, {
    foreignKey: 'customer_id'
});

User.hasMany(Order, {
    foreignKey: 'customer_id'
});

module.exports = {
    Category,
    Product,
    Order,
    User
};