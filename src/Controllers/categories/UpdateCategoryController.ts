import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/categories/UpdateCategoryService";

export class UpdateCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name} = request.body;

    const service = new UpdateCategoryService();
    const result = await service.execute({ id, name });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}