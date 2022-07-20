import { Role } from "../../entities/role";

import { getRepository } from "typeorm";

export class LoadRoleByIdService {
  async execute(id: string): Promise<Role | Error> {
    const repo = getRepository(Role);

    const role = await repo.findOne({id: id});

    if(!role) {
      return new Error('Role does not exists');
    }

    return role
  }
}