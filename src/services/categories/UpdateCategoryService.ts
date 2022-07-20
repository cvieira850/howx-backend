import { Category } from "../../entities/category";

import { getRepository } from "typeorm";

type CategoryUpdateRequest = {
  id: string;
  name: string;
}

export class UpdateCategoryService {
  async execute({id, name} : CategoryUpdateRequest): Promise<Category | Error> {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if(!category) {
      return new Error('Category does not exists');
    }

    category.name = name ? name : category.name;

    await repo.save(category);

    return category
  }
}