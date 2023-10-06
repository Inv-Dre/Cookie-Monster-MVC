const router = require('express').Router();
const { Product, User, Cart } = require('../models')
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
try{
    const productData = await Product.findAll();
    const products = []
    productData.forEach( data =>{
    products.push(data.get({plain:true}))
    })

   console.log(products)
    res.render('homepage', { productData: products, logged_in:req.session.logged_in })
    
} catch (err) {
    res.status(400).json(err);

}
});

router.get('/product/:id', async (req, res) => {
  try{
    const productData = await Product.findByPk(req.params.id);

    const product = productData.get({ plain: true });

    console.log(product)

    res.render('product',  product );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);

  }

});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return; 
}
res.render('login');
});

router.get('/cart', withAuth,  async (req,res) =>{
  const cartData = await User.findOne({ where: { id: req.session.user_id },
    include:{model: Cart}})
    const cart = cartData.cart ? cartData.get({plain:true}) : null
   
    for (let i = 0; i < cart.cart.items.length; i++) {
      const productId = cart?.cart ? JSON.parse(cart.cart.items)[i]:null
      const productData = await Product.findByPk(productId)
      const product = productData ? productData.get({plain:true}) : null
    console.log(product)
    }
    // const productId = cart?.cart ? JSON.parse(cart.cart.items)[0]: null
    // const productData = await Product.findByPk(productId)
    // const product = productData ? productData.get({plain:true}) : null
    // console.log(product)
  res.render('cart', product)
})

module.exports = router;