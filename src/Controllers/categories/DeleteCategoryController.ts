import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/categories/DeleteCategoryService";

export class DeleteCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new DeleteCategoryService();

    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).end()
  }
}