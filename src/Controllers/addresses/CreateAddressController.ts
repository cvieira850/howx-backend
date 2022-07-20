import { Request, Response } from "express";
import { CreateAddressService } from "../../services/addresses/CreateAddressService";

export class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cep, district, city_id, complement, street, number } = request.body;

    const service = new CreateAddressService();

    const result = await service.execute({ cep, district, city_id, complement, street, number });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}