import { Request, Response } from "express";
import { GetAllProductsService } from "../../services/products/GetAllProductsService";

export class GetAllProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllProductsService();

    const products = await service.execute();

    return response.status(200).json(products);
  }
}