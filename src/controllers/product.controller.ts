import { Request, Response } from 'express';
import { productService } from '../services';

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NOT_FOUND_STATUS = 404;

async function createProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const newProduct = await productService.createProduct(name, amount);
  return res.status(HTTP_CREATED_STATUS).json(newProduct);
}

async function listProducts(_req: Request, res: Response) {
  const products = await productService.findAll();
  return res.status(HTTP_OK_STATUS).json(products);
}

async function getProductById(req: Request, res: Response) {
  const { id } = req.params;
  const product = await productService.findById(+id);

  if (product) return res.status(HTTP_OK_STATUS).json(product);

  res.status(HTTP_NOT_FOUND_STATUS).send('Product not found');
}

export default {
  listProducts,
  createProduct,
  getProductById,
};