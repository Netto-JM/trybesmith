import { Router } from 'express';
import { productController } from '../controllers';

const productRouter = Router();
productRouter.get('/:id', productController.getProductById)
  .get('/', productController.listProducts)
  .post('/', productController.createProduct);

export default productRouter;