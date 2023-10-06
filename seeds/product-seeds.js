const { Product } = require('../models');

const productData = [
    {
        product_name: 'iPhone 15',
        price: 799.99,
        stock: 100,
        category_id: 1,
        filename:"01-iphone-15.jpg",
    },
    {
        product_name: 'Peloton Exercise Bike',
        price: 1145.00,
        stock: 5,
        category_id: 2,
        filename:"02-peloton-bike.jpg"
    },
    {
        product_name: 'Apple AirPods Max',
        price: 479.00,
        stock: 12,
        category_id: 1,
        filename:"03-air-pods-max.jpg"
    },
    {
        product_name: 'Bloom Nutrition Super Greens Powder',
        price: 39.99,
        stock: 20,
        category_id: 2,
        filename:"Bloom.png"
    },
    {
        product_name: 'NATURELO One Daily Multivitamin',
        price: 59.95,
        stock: 17,
        category_id: 2,
        filename:"Naturelo.png"
    },
    {
        product_name: 'Anker USB-C Cable',
        price: 9.99,
        stock: 27,
        category_id: 1,
        filename:"Anker.png"
    },
    {
        product_name: 'ATERCEL Workout Gloves',
        price: 13.95,
        stock: 35,
        category_id: 2,
        filename:"Atercel.png"
    },
    {
        product_name: 'Oridium Adjustable Dumbbell',
        price: 219.99,
        stock: 9,
        category_id: 2,
        filename:"oridium-adjustable-dumbbell.png"
    },
    {
        product_name: 'Wireless 3 in 1 Charging Station',
        price: 27.19,
        stock: 19,
        category_id: 1,
        filename:"wireless-charging-station.png"
    },
    {
        product_name: 'WD Elements 5TB Prtable HDD',
        price: 104.09,
        stock: 4,
        category_id: 1,
        filename:"WD-Elements-5TB-Prtable-HDD.png"
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;