import { User } from "../../entities/user";

import { getRepository } from "typeorm";

export class GetAllUsersService  {
  async execute() {
    const repo = getRepository(User);

    const users = await repo.find();

    return users;
  }
}