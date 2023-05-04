import { Request, Response } from 'express';
import { productService } from '../services';
import statusCodes from '../statusCodes';

async function createProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const newProduct = await productService.createProduct(name, amount);
  return res.status(statusCodes.CREATED).json(newProduct);
}

async function listProducts(_req: Request, res: Response) {
  const products = await productService.findAll();
  return res.status(statusCodes.OK).json(products);
}

async function getProductById(req: Request, res: Response) {
  const { id } = req.params;
  const product = await productService.findById(+id);

  if (product) return res.status(statusCodes.OK).json(product);

  return res.status(statusCodes.NOT_FOUND).send('Product not found');
}

export default {
  createProduct,
  listProducts,
  getProductById,
};