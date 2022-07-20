import { City } from "../../entities/city";
import { State } from "../../entities/state";

import { getRepository } from "typeorm";

type CityRequest = {
  name: string;
  description: string;
  state_id: string;
}

export class CreateCityService {
  async execute({name, description, state_id}: CityRequest ) : Promise<City | Error> {
    const repo = getRepository(City);
    const stateRepo = getRepository(State);

    if(await repo.findOne({name: name , state_id: state_id})) {
      return new Error('City already exists');
    }

    const state = await stateRepo.findOne({id: state_id});
    if(!state) {
      return new Error('State does not exists');
    }

    const city = repo.create({
      name,
      description,
      state_id
    })

    await repo.save(city)

    return city
  }
}