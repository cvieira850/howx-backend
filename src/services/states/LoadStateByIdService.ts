import { State } from "../../entities/state";

import { getRepository } from "typeorm";

export class LoadStateByIdService {
  async execute(id: string): Promise<State | Error> {
    const repo = getRepository(State);

    const state = await repo.findOne({id: id});

    if(!state) {
      return new Error('State does not exists');
    }

    return state
  }
}