import { Request, Response } from "express";
import { UpdateCityService } from "../../services/cities/UpdateCityService";

export class UpdateCityController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, state_id} = request.body;

    const service = new UpdateCityService();
    const result = await service.execute({ id, name, description, state_id });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}