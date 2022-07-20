import { State } from "../../entities/state";

import { getRepository } from "typeorm";

export class GetAllStatesService  {
  async execute() {
    const repo = getRepository(State);

    const state = await repo.find();

    return state;
  }
}