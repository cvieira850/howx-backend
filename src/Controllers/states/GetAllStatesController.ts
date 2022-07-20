import { Request, Response } from "express";
import { GetAllStatesService } from "../../services/states/GetAllStatesService";

export class GetAllStatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllStatesService();

    const states = await service.execute();

    return response.status(200).json(states);
  }
}