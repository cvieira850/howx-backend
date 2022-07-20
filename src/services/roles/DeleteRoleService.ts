import { Role } from "../../entities/role";

import { getRepository } from "typeorm";

export class DeleteRoleService {
  async execute(id: string ) {
    const repo = getRepository(Role);

    if(!await repo.findOne({id})) {
      return new Error('Role does not exists');
    }

    repo.softDelete({id})
  }
}