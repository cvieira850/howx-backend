import { Request, Response } from "express";
import { CreateStateService } from "../../services/states/CreateStateService";

export class CreateStateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { uf, description} = request.body;

    const service = new CreateStateService();

    const result = await service.execute({ uf, description });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}