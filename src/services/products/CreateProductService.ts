import { Category } from "../../entities/category";
import { Product } from "../../entities/product";

import { getRepository } from "typeorm";

type ProductRequest = {
  name: string;
  description: string;
  price: string;
  quantity: number;
  category_id: string;
}

type ProductReturn = {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  category: string;
}

export class CreateProductService {
  async execute({name, description, price, quantity, category_id }: ProductRequest ) : Promise<ProductReturn | Error> {
    const repo = getRepository(Product);
    const categoryRepo = getRepository(Category);
    const category = await categoryRepo.findOne({id: category_id});
    if(! category){
      return new Error('Category does not exists');
    }

    if(await repo.findOne({name})) {
      return new Error('Product already exists');
    }

    const product = repo.create({
      name,
      description,
      price: parseFloat(price) * 100,
      quantity,
      category_id,
    })

    await repo.save(product)

    return {
      id: product.id,
      name,
      description,
      price,
      quantity,
      category: category.name
    }
  }
}