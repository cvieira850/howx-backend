import { Request, Response } from "express";
import { UpdateStateService } from "../../services/states/UpdateStateService";

export class UpdateStateController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { uf, description} = request.body;

    const service = new UpdateStateService();
    const result = await service.execute({ id, uf, description });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}