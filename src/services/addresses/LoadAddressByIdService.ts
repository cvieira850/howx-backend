import { Address } from "../../entities/address";

import { getRepository } from "typeorm";



export class LoadAddressByIdService {
  async execute(id: string): Promise<Address | Error> {
    const repo = getRepository(Address);
    const address = await repo.createQueryBuilder("addresses")
    .innerJoinAndSelect("addresses.city", "city")
    .innerJoinAndSelect("city.state", "state")
    .where("addresses.id = :id", {id})
    .getOne();


    if(!Address) {
      return new Error('Address does not exists');
    }
      return address
  }
}