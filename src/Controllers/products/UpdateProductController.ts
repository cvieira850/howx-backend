import { Request, Response } from "express";
import { UpdateProductService } from "../../services/products/UpdateProductService";

export class UpdateProductController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, price, category_id, quantity } = request.body;

    const service = new UpdateProductService();
    const result = await service.execute({ id, name, description, price, category_id, quantity });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}