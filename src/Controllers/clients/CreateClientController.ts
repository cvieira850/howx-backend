import { Request, Response } from "express";
import { CreateClientService } from "../../services/clients/CreateClientService";

export class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf, name, address_id, phone, email } = request.body;

    const service = new CreateClientService();

    const result = await service.execute({ cpf, name, address_id, phone, email });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}