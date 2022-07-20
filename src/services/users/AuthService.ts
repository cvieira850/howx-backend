import { User } from "../../entities/user";
import { Role } from "../../entities/role";

import { getRepository } from "typeorm";
import bcrypt from 'bcrypt'

type UserRequest = {
  access_token: string;
  role_id?: string;
}

export class AuthService {
  async execute({access_token, role_id }: UserRequest ) : Promise<User | Error> {
    const repo = getRepository(User);
    const user = await repo.findOne({access_token: access_token});
    
    if(!user) {
      return new Error('Forbbiden');
    }

    return user;
  }
}