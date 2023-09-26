const router = require('express').Router();
const { Product } = require('../../models')

router.get('/', async (req, res) => {
try{
    const productData = await Product.findAll()
    res.status(400).json(productData);
} catch (err) {
    res.status(400).json(err);

}
});

router.get('/product/:id', async (req, res) => {
  try{
    const productData = await Product.findByPk(req.params.id);

    const product = productData.get({ plain: true });

    res.render('product', { product });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);

  }

});



module.exports = router;