import { Category } from "../../entities/category";

import { getRepository } from "typeorm";



export class LoadCategoryByIdService {
  async execute(id: string): Promise<Category | Error> {
    const repo = getRepository(Category);

    const category = await repo.findOne({id: id});

    if(!category) {
      return new Error('Category does not exists');
    }

    return category
  }
}