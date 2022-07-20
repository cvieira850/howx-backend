import { Request, Response } from "express";
import { LoadCityByIdService } from "../../services/cities/LoadCityByIdService";

export class LoadCityByIdController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new LoadCityByIdService();
    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}