import { Request, Response } from "express";
import { LoadClientByIdService } from "../../services/clients/LoadClientByIdService";

export class LoadClientByIdController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new LoadClientByIdService();
    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}