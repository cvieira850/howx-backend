import { Request } from "../../entities/request";

import { getRepository } from "typeorm";

export class LoadRequestByIdService {
  async execute(id: string): Promise<Request | Error> {
    const repo = getRepository(Request);
    const request = await repo.createQueryBuilder("requests")
    .innerJoinAndSelect("requests.client", "client")
    .innerJoinAndSelect("client.address", "address")
    .innerJoinAndSelect("address.city", "city")
    .innerJoinAndSelect("city.state", "state")
    .where("requests.id = :id", {id})
    .getOne();


    if(!request) {
      return new Error('Request does not exists');
    }
      return request
  }
}