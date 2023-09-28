const router = require('express').Router();
const { Product } = require('../models')
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

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;