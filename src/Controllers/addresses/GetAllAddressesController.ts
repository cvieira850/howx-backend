import { Request, Response } from "express";
import { GetAllAddressesService } from "../../services/addresses/GetAllAddressesService";

export class GetAllAddressesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllAddressesService();

    const addresses = await service.execute();

    return response.status(200).json(addresses);
  }
}