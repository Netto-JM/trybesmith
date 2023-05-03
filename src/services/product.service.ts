import { productModel } from '../models';
import { Product } from '../types/product';

async function createProduct(name: string, amount: string): Promise<Product> {
  const newProduct = await productModel.insert(name, amount);
  return newProduct;
}

async function findAll(): Promise<Product[]> {
  const products = await productModel.findAll();
  return products;
}

async function findById(productId: number): Promise<Product | null> {
  const product = await productModel.findById(productId);
  return product || null;
}

export default {
  createProduct,
  findAll,
  findById,
};