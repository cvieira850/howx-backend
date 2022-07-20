import { Address } from "../../entities/address";
import { Client } from "../../entities/client";

import { getRepository } from "typeorm";

type ClientRequest = {
  id: string;
  cpf: string;
  name: string;
  email: string;
  phone: string;
  address_id: string;
}

export class UpdateClientService {
  async execute({id, cpf, name, email, phone, address_id} : ClientRequest) {
    const repo = getRepository(Client);
    const addressRepo = getRepository(Address);
    const client = await repo.findOne(id);
    if(address_id) {
      const address = await addressRepo.findOne({id: address_id});
      if(!address) {
        return new Error('Address does not exists');
      }
    }

    if(!client) {
      return new Error('Client does not exists');
    }

    client.name = name ? name : client.name;
    client.cpf = cpf ? cpf : client.cpf;
    client.address_id = address_id ? address_id : client.address_id;
    client.email = email ? email : client.email;
    client.phone = phone ? phone : client.phone;

    await repo.save(client);

    return await repo.createQueryBuilder('clients')
    .innerJoinAndSelect('clients.address', 'address')
    .innerJoinAndSelect('address.city', 'city')
    .innerJoinAndSelect('city.state', 'state')
    .where("clients.id = :id", {id})
    .getOne();
    
  }
}