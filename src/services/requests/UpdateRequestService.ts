import { Client } from "../../entities/client";
import { Request } from "../../entities/request";

import { getRepository } from "typeorm";

type RRequest = {
  id: string;
  value: string;
  type_payment: string;
  client_id: string;
}

export class UpdateRequestService {
  async execute({id, value, type_payment, client_id} : RRequest) {
    const repo = getRepository(Request);
    const clientRepo = getRepository(Client);
    const request = await repo.findOne(id);
    if(client_id) {
      const client = await clientRepo.findOne({id: client_id});
      if(!client) {
        return new Error('Client does not exists');
      }
    }

    if(!request) {
      return new Error('Request does not exists');
    }

    request.type_payment = type_payment ? type_payment : request.type_payment;
    request.value = value ? parseFloat(value) * 100 : request.value;
    request.client_id = client_id ? client_id : request.client_id;

    await repo.save(request);

    return await repo.createQueryBuilder('requests')
    .innerJoinAndSelect('requests.client', 'client')
    .innerJoinAndSelect('client.address', 'address')
    .innerJoinAndSelect('address.city', 'city')
    .innerJoinAndSelect('city.state', 'state')
    .where("requests.id = :id", {id})
    .getOne();
    
  }
}