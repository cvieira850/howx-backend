import { Role } from "../../entities/role";

import { getRepository } from "typeorm";

type RoleRequest = {
  name: string;
  weight: number;
}

export class CreateRoleService {
  async execute({name, weight}: RoleRequest ) : Promise<Role | Error> {
    const repo = getRepository(Role);

    if(await repo.findOne({name})) {
      return new Error('Role already exists');
    }

    const role = repo.create({
      name,
      weight
    })

    await repo.save(role)

    return role
  }
}