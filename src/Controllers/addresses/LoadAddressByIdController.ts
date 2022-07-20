import { Request, Response } from "express";
import { LoadAddressByIdService } from "../../services/addresses/LoadAddressByIdService";

export class LoadAddressByIdController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new LoadAddressByIdService();
    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}