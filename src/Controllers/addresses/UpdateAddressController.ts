import { Request, Response } from "express";
import { UpdateAddressService } from "../../services/addresses/UpdateAddressService";

export class UpdateAddressController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { cep, district, street, city_id, number, complement } = request.body;

    const service = new UpdateAddressService();
    const result = await service.execute({ id, cep, district, street, city_id, number, complement });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}