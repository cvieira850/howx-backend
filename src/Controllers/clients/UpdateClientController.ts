import { Request, Response } from "express";
import { UpdateClientService } from "../../services/clients/UpdateClientService";

export class UpdateClientController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { cpf, name, email, address_id, phone } = request.body;

    const service = new UpdateClientService();
    const result = await service.execute({ id, cpf, name, email, address_id, phone });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}