import { Request, Response } from "express";
import { GetAllClientsService } from "../../services/clients/GetAllClientsService";

export class GetAllClientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllClientsService();

    const clients = await service.execute();

    return response.status(200).json(clients);
  }
}