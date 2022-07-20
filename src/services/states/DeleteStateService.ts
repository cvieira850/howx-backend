import { State } from "../../entities/state";

import { getRepository } from "typeorm";

export class DeleteStateService {
  async execute(id: string ) {
    const repo = getRepository(State);

    if(!await repo.findOne({id})) {
      return new Error('State does not exists');
    }

    repo.softDelete({id})
  }
}