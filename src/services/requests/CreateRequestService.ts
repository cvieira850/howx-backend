import { Request } from "../../entities/request";
import { Client } from "../../entities/client";

import { getRepository } from "typeorm";


type RequestRequest = {
  value: string;
  type_payment: string;
  client_id?: string;
  name?: string;
}

export class CreateRequestService {
  async execute({value, type_payment, client_id, name}: RequestRequest )  {
    const repo = getRepository(Request);
    const clientRepo = getRepository(Client);
    let newClient, request;
    console.log({value, type_payment, client_id, name})
    if(client_id) {  

      const client = await clientRepo.findOne({id: client_id});
    
      if(! client){
        return new Error('Client does not exists');
      }
      request = repo.create({
        value : parseFloat(value) * 100,
        type_payment,
        client_id,
      })
    } else {
      const client = await clientRepo.findOne({name: name});
    
      if(! client){
        newClient = clientRepo.create({name: name});
        await clientRepo.save(newClient);
        console.log(newClient.id)
        request = await repo.create({
          value : parseFloat(value) * 100,
          type_payment,
          client_id: newClient.id,
        })
      } else {
        request = repo.create({
          value : parseFloat(value) * 100,
          type_payment,
          client_id: client.id,
        })
      }
    }
    
   
    console.log("request", request)
    await repo.save(request)


    return await repo.createQueryBuilder("requests")
    .innerJoinAndSelect("requests.client", "client")
    .leftJoinAndSelect("client.address", "address")
    .leftJoinAndSelect("address.city", "city")
    .leftJoinAndSelect("city.state", "state")
    .where("requests.id = :id", {id:request.id})
    .getOne();
  }
}