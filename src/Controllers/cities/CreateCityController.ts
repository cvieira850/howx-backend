import { Request, Response } from "express";
import { CreateCityService } from "../../services/cities/CreateCityService";

export class CreateCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, state_id} = request.body;

    const service = new CreateCityService();

    const result = await service.execute({ name, description, state_id });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}