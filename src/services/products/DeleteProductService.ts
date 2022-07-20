import { Product } from "../../entities/product";

import { getRepository } from "typeorm";

export class DeleteProductService {
  async execute(id: string ) {
    const repo = getRepository(Product);

    if(!await repo.findOne({id})) {
      return new Error('Product does not exists');
    }

    repo.softDelete({id})
  }
}