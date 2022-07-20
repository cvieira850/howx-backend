import { State } from "../../entities/state";

import { getRepository } from "typeorm";

type StateRequest = {
  uf: string;
  description: string;
}

export class CreateStateService {
  async execute({uf, description}: StateRequest ) : Promise<State | Error> {
    const repo = getRepository(State);

    if(await repo.findOne({uf: uf})) {
      return new Error('State already exists');
    }

    const state = repo.create({
      uf,
      description
    })

    await repo.save(state)

    return state
  }
}