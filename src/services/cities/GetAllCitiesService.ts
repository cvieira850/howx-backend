import { City } from "../../entities/city";

import { getRepository } from "typeorm";

export class GetAllCitiesService  {
  async execute() {
    const repo = getRepository(City);

    const cities = await repo.find();

    return cities;
  }
}