import { Address } from "../../entities/address";

import { getRepository } from "typeorm";

export class GetAllAddressesService  {
  async execute() {
    const repo = getRepository(Address);

    return await repo.createQueryBuilder("addresses")
    .innerJoinAndSelect("addresses.city", "city")
    .innerJoinAndSelect("city.state", "state")
    .getMany();
  }
}