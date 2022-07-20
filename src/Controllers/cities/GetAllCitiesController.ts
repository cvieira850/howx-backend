import { Request, Response } from "express";
import { GetAllCitiesService } from "../../services/cities/GetAllCitiesService";

export class GetAllCitiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllCitiesService();

    const cities = await service.execute();

    return response.status(200).json(cities);
  }
}