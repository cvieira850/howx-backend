import { Request } from "../../entities/request";

import { getRepository } from "typeorm";

export class GetAllRequestsService  {
  async execute() {
    const repo = getRepository(Request);

    return await repo.createQueryBuilder("requests")
    .leftJoinAndSelect("requests.client", "client")
    .leftJoinAndSelect("client.address", "address")
    .leftJoinAndSelect("address.city", "city")
    .leftJoinAndSelect("city.state", "state")
    .getMany();
  }
}