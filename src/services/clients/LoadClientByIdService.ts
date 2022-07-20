import { Client } from "../../entities/client";

import { getRepository } from "typeorm";



export class LoadClientByIdService {
  async execute(id: string): Promise<Client | Error> {
    const repo = getRepository(Client);
    const client = await repo.createQueryBuilder("clients")
    .innerJoinAndSelect("clients.address", "address")
    .innerJoinAndSelect("address.city", "city")
    .innerJoinAndSelect("city.state", "state")
    .where("clients.id = :id", {id})
    .getOne();


    if(!client) {
      return new Error('Client does not exists');
    }
      return client
  }
}