import { Product } from "../../entities/product";

import { getRepository } from "typeorm";

export class LoadProductByIdService {
  async execute(id: string): Promise<Product | Error> {
    const repo = getRepository(Product);
    const product = await repo.createQueryBuilder("products")
    .innerJoinAndSelect("products.category", "category")
    .where("products.id = :id", {id})
    .getOne();


    if(!product) {
      return new Error('Product does not exists');
    }
      return product
  }
}