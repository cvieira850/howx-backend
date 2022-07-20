import { User } from "../../entities/user";

import { getRepository } from "typeorm";

export class DeleteUserService {
  async execute(id: string ) {
    const repo = getRepository(User);

    if(!await repo.findOne({id})) {
      return new Error('User does not exists');
    }

    repo.softDelete({id})
  }
}