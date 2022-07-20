import { Role } from "../../entities/role";

import { getRepository } from "typeorm";

export class GetAllRolesService  {
  async execute() {
    const repo = getRepository(Role);

    const roles = await repo.find();

    return roles;
  }
}