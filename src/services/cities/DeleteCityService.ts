import { City } from "../../entities/city";

import { getRepository } from "typeorm";

export class DeleteCityService {
  async execute(id: string ) {
    const repo = getRepository(City);

    if(!await repo.findOne({id})) {
      return new Error('City does not exists');
    }

    repo.softDelete({id})
  }
}