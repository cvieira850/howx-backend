import { Request, Response } from "express";
import { GetAllCategoriesService } from "../../services/categories/GetAllCategoriesService";

export class GetAllCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllCategoriesService();

    const categories = await service.execute();

    return response.status(200).json(categories);
  }
}