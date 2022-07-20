import { User } from "../../entities/user";
import { Role } from "../../entities/role";

import { getRepository } from "typeorm";
import bcrypt from 'bcrypt'

type UserRequest = {
  name: string;
  email: string;
  password: string;
  role_id?: string;
}

export class CreateUserService {
  async execute({name, email, password, role_id }: UserRequest ) : Promise<User | Error> {
    const repo = getRepository(User);
    const roleRepo = getRepository(Role);
    let role;
    if(role_id) {
      if(! await roleRepo.findOne({id: role_id})){
        return new Error('Role does not exists');
      }
    } else {
      role = await roleRepo.findOne({name: 'user'});
    } 

    if(await repo.findOne({name})) {
      return new Error('User already exists');
    }
    const passwordHashed = await bcrypt.hash(password, 12);
    const user = repo.create({
      name,
      email,
      password: passwordHashed,
      role_id: role_id ? role_id : role.id,
    })

    await repo.save(user)

    return user
  }
}