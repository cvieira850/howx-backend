import { User } from "../../entities/user";
import { Role } from "../../entities/role";

import { getRepository } from "typeorm";
import bcrypt from 'bcrypt'

type UserRequest = {
  email: string;
  password: string;
}

export class LoginService {
  async execute({email, password }: UserRequest ) : Promise<User | Error> {
    const repo = getRepository(User);
    const user = await repo.findOne({email: email});
    
    if(!user) {
      return new Error('User does not exists');
    }
    const isValid = await bcrypt.compare(password, user.password);
    
    if(isValid) {
      return user
    }

    return new Error('Invalid password');
  }
}