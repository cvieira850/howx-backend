import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

export class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, category_id, price, quantity } = request.body;

    const service = new CreateProductService();

    const result = await service.execute({ name, description, category_id, price, quantity });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}