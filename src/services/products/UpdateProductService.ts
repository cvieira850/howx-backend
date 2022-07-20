import { Category } from "../../entities/category";
import { Product } from "../../entities/product";

import { getRepository } from "typeorm";

type ProductUpdateRequest = {
  id: string;
  name: string;
  description: string;
  category_id: string;
  price: string;
  quantity: number;
}

type ProductUpdateReturn = {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  category: string;
}

export class UpdateProductService {
  async execute({id, name, description, category_id, price, quantity} : ProductUpdateRequest): Promise<ProductUpdateReturn | Error> {
    const repo = getRepository(Product);
    const categoryRepo = getRepository(Category);
    let category;
    const product = await repo.findOne(id);
    if(category_id) {
      category = await categoryRepo.findOne({id: category_id});
      if(!category) {
        return new Error('Category does not exists');
      }
    } else {
      category = await categoryRepo.findOne({id: product.category_id});
    }

    if(!product) {
      return new Error('Product does not exists');
    }

    product.name = name ? name : product.name;
    product.description = description ? description : product.description;
    product.category_id = category_id ? category_id : product.category_id;
    product.quantity = quantity ? quantity : product.quantity;
    if(price) {
      product.price = price ? parseFloat(price) * 100 : product.price;
    }

    await repo.save(product);

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: price,
      quantity: product.quantity,
      category: category.name
    }
  }
}