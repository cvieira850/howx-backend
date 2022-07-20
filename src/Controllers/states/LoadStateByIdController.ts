import { Request, Response } from "express";
import { LoadStateByIdService } from "../../services/states/LoadStateByIdService";

export class LoadStateByIdController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new LoadStateByIdService();
    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}