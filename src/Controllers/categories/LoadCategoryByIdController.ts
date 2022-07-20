import { Request, Response } from "express";
import { LoadCategoryByIdService } from "../../services/categories/LoadCategoryByIdService";

export class LoadCategoryByIdController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new LoadCategoryByIdService();
    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}