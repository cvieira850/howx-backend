import { Product } from "../../entities/product";

import { getRepository } from "typeorm";

export class GetAllProductsService  {
  async execute() {
    const repo = getRepository(Product);

    const products = await repo.createQueryBuilder("products")
    .innerJoinAndSelect("products.category", "category")
    .getMany();

    return products;
  }
}