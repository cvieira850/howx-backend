import { Client } from "../../entities/client";

import { getRepository } from "typeorm";

export class GetAllClientsService  {
  async execute() {
    const repo = getRepository(Client);

    return await repo.createQueryBuilder("clients")
    .innerJoinAndSelect("clients.address", "address")
    .innerJoinAndSelect("address.city", "city")
    .innerJoinAndSelect("city.state", "state")
    .getMany();
  }
}