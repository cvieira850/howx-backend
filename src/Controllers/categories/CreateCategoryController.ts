import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/categories/CreateCategoryService";

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name} = request.body;

    const service = new CreateCategoryService();

    const result = await service.execute({ name });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}