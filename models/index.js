const Category = require('./Category');
const Product = require('./Product');
const Order = require('./Order');
const User = require('./User');
const Cart = require('./Cart');

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Cart.belongsTo(User,{
    foreignKey:'user_id'
});

User.hasOne(Cart,{
    foreignKey: 'user_id'
});

// Order.belongsTo(User, {
//     foreignKey: 'customer_id'
// });

// User.hasMany(Order, {
//     foreignKey: 'customer_id'
// });

module.exports = {
    Category,
    Product,
    // Order,
    User,
    Cart,
};