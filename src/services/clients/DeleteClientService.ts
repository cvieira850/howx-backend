import { Client } from "../../entities/client";

import { getRepository } from "typeorm";

export class DeleteClientService {
  async execute(id: string ) {
    const repo = getRepository(Client);

    if(!await repo.findOne({id})) {
      return new Error('Client does not exists');
    }

    repo.softDelete({id})
  }
}