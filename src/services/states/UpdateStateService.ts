import { State } from "../../entities/state";

import { getRepository } from "typeorm";

type StateUpdateRequest = {
  id: string;
  uf: string;
  description: string;
}

export class UpdateStateService {
  async execute({id, uf, description} : StateUpdateRequest): Promise<State | Error> {
    const repo = getRepository(State);

    const state = await repo.findOne(id);

    if(!state) {
      return new Error('State does not exists');
    }

    state.uf = uf ? uf : state.uf;
    state.description = description ? description : state.description;

    await repo.save(state);

    return state
  }
}