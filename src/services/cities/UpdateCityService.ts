import { City } from "../../entities/city";
import { State } from "../../entities/state";

import { getRepository } from "typeorm";

type CityUpdateRequest = {
  id: string;
  name: string;
  description: string;
  state_id: string;
}

export class UpdateCityService {
  async execute({id, name, description, state_id} : CityUpdateRequest): Promise<City | Error> {
    const repo = getRepository(City);

    const city = await repo.findOne(id);

    const stateRepo = getRepository(State);
    if(state_id){
      const state = await stateRepo.findOne({id: state_id});
      if(!state) {
        return new Error('State does not exists');
      }
    }
    

    if(!city) {
      return new Error('City does not exists');
    }

    city.name = name ? name : city.name;
    city.description = description ? description : city.description;
    city.state_id = state_id ? state_id : city.state_id;

    await repo.save(city);

    return city
  }
}