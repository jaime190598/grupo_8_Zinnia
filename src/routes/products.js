const express = require('express');
const router = express.Router();
const methodOverride= require('method-override');
const productosController=require('../controllers/productosController');
const detalleMenuController=require('../controllers/detalleMenuController');
const formController=require('../controllers/formController');
const productsMiddleware=require('../middlewares/products');
const editProductMiddleware=require('../middlewares/editProducts')
const rolUserMiddleware= require('../middlewares/rolUserMiddleware');
//method-override
router.use(methodOverride('_method', {methods:["POST", "GET"]}));


///////Fin validator
//Inicio Metodos GET
router.get('/products',rolUserMiddleware, productosController.productos);
router.get('/verano/:id/products?', productosController.categorys_clothes);
router.get('/otono/:id/products?', productosController.categorys_clothes);
router.get('/primavera/:id/products?', productosController.categorys_clothes);
router.get('/invierno/:id/products?', productosController.categorys_clothes);
router.get('/topscamisas/:id/products?', productosController.categorys_clothes);
router.get('/pantalonesjeans/:id/products?', productosController.categorys_clothes);
router.get('/vestidosfaldas/:id/products?', productosController.categorys_clothes);
router.get('/abrigostrench/:id/products?', productosController.categorys_clothes);
router.get('/pijamas/:id/products?', productosController.categorys_clothes);
router.get('/mas_vendido/:id/products?', productosController.categorys_clothes);
router.get('/ofertas/:id/products?', productosController.categorys_clothes);
router.get('/accesorios/:id/products?', productosController.categorys_clothes);
router.get('/formProduct',rolUserMiddleware,formController.formulario);
//GET:ID
router.get('/detalleMenu/:id?',detalleMenuController.getIdProduct);
router.get('/product/:id/edit?',rolUserMiddleware,formController.geteditform);
router.get('/product/:pag/paginado/:off?',rolUserMiddleware,productosController.paginado);
//Fin metodos GET
//Inicio Metodos POST
router.post('/products', productsMiddleware.fileUpLoad.single('imgProduct'), productsMiddleware.validations, formController.addProduct);
router.post('/search/product',productosController.searchlist )
router.post('/product/search',productosController.searchProduct)
//Fin metodos POST
//Inicio Metodo PUT
router.put('/edit', editProductMiddleware.fileUpLoad.single('imgProduct'), editProductMiddleware.validations, formController.editProduct);
//final methodo put 
//Inicio Metodo DELET
router.delete('/products/:id/:image?',formController.deletProduct)
//final metodo delet

module.exports=router;