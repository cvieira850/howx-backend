import { Client } from "../../entities/client";
import { Address } from "../../entities/address";

import { getRepository } from "typeorm";

type ClientRequest = {
  cpf?: string;
  name: string;
  email?: string;
  phone?: string;
  address_id?: string;
}

export class CreateClientService {
  async execute({cpf, name, email, phone, address_id}: ClientRequest )  {
    const repo = getRepository(Client);
    const addressRepo = getRepository(Address);
    
    const address = await addressRepo.findOne({id: address_id});
  
    // if(! address){
    //   return new Error('Address does not exists');
    // }

    if(await repo.findOne({cpf: cpf, phone: phone, email: email, name: name})) {
      return new Error('Client already exists');
    }
    
    const client = repo.create({
      cpf,
      name,
      email,
      phone,
      address_id: address_id ? address_id : null,
    })

    await repo.save(client)


    return await repo.createQueryBuilder("clients")
    .innerJoinAndSelect("clients.address", "address")
    .innerJoinAndSelect("address.city", "city")
    .innerJoinAndSelect("city.state", "state")
    .where("clients.id = :id", {id:client.id})
    .getOne();
  }
}