const { User } = require('../models');

const userData =[ {
    email: 'cookiemonster@gmail.com',
    password: 'password123'
}];

const seedUsers = () => User.bulkCreate(userData, {individualHooks:true});

module.exports = seedUsers;