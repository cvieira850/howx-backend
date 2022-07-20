import { City } from "../../entities/city";

import { getRepository } from "typeorm";

export class LoadCityByIdService {
  async execute(id: string): Promise<City | Error> {
    const repo = getRepository(City);

    const city = await repo.findOne({id: id});

    if(!city) {
      return new Error('City does not exists');
    }

    return city
  }
}