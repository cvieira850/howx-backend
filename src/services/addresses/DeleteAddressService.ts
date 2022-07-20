import { Address } from "../../entities/address";

import { getRepository } from "typeorm";

export class DeleteAddressService {
  async execute(id: string ) {
    const repo = getRepository(Address);

    if(!await repo.findOne({id})) {
      return new Error('Address does not exists');
    }

    repo.softDelete({id})
  }
}