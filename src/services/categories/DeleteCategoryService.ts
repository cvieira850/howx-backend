import { Category } from "../../entities/category";

import { getRepository } from "typeorm";

export class DeleteCategoryService {
  async execute(id: string ) {
    const repo = getRepository(Category);

    if(!await repo.findOne({id})) {
      return new Error('Category does not exists');
    }

    repo.softDelete({id})
  }
}