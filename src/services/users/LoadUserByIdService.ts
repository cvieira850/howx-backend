import { User } from "../../entities/user";

import { getRepository } from "typeorm";

export class LoadUserByIdService {
  async execute(id: string): Promise<User | Error> {
    const repo = getRepository(User);

    const user = await repo.findOne({id: id} );

    if(!user) {
      return new Error('User does not exists');
    }
      return user
  }
}