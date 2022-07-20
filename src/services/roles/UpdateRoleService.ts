import { Role } from "../../entities/role";

import { getRepository } from "typeorm";

type RoleUpdateRequest = {
  id: string;
  name: string;
  weight: number;
}

export class UpdateRoleService {
  async execute({id, name, weight} : RoleUpdateRequest): Promise<Role | Error> {
    const repo = getRepository(Role);

    const role = await repo.findOne(id);

    if(!role) {
      return new Error('Role does not exists');
    }

    role.name = name ? name : role.name;
    role.weight = weight ? weight : role.weight;

    await repo.save(role);

    return role
  }
}