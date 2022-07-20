import { User } from "../../entities/user";

import { getRepository } from "typeorm";
import jwt from 'jsonwebtoken'

type UserRequest = {
  id: string;
}

export class UpdateUSerAccessTokenService {
  async execute({id }: UserRequest ) : Promise<User | Error> {
    const repo = getRepository(User);
    const account = await repo.findOne({id});
    if (account !== undefined) {
      account.access_token = jwt.sign({ id: account.id }, process.env.JWT_SECRET);
      await repo.save(account);

      return account
    }
  }
}