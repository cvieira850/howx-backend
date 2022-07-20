import { Request, Response } from "express";
import { DeleteCityService } from "../../services/cities/DeleteCityService";

export class DeleteCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new DeleteCityService();

    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).end()
  }
}