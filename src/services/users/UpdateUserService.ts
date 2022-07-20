import { User } from "../../entities/user";
import { Role } from "../../entities/role";

import { getRepository } from "typeorm";
import bcrypt from 'bcrypt'

type RoleUpdateRequest = {
  id: string;
  name: string;
  email: string;
  role_id: string;
  password: string;
}

export class UpdateUserService {
  async execute({id, name, email, role_id, password} : RoleUpdateRequest): Promise<User | Error> {
    const repo = getRepository(User);
    const roleRepo = getRepository(Role);

    const user = await repo.findOne(id);
    if(role_id) {
      const role = await roleRepo.findOne({id: role_id});
      if(!role) {
        return new Error('Role does not exists');
      }
    }

    if(!user) {
      return new Error('User does not exists');
    }

    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.role_id = role_id ? role_id : user.role_id;
    if(password) {
      const passwordHashed = await bcrypt.hash(password, 12);
      user.password = password ? passwordHashed : user.password;
    }

    await repo.save(user);

    return user
  }
}