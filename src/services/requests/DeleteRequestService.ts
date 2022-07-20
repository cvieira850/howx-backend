import { Request } from "../../entities/request";

import { getRepository } from "typeorm";

export class DeleteRequestService {
  async execute(id: string ) {
    const repo = getRepository(Request);

    if(!await repo.findOne({id})) {
      return new Error('Request does not exists');
    }

    repo.softDelete({id})
  }
}