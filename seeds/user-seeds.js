const { User } = require('../models');

const userData =[ {
    name: 'Cookie',
    email: 'cookiemonster@gmail.com',
    password: 'password123'
}];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;