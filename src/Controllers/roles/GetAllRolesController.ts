import { Request, Response } from "express";
import { GetAllRolesService } from "../../services/roles/GetAllRolesService";

export class GetAllRolesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllRolesService();

    const roles = await service.execute();

    return response.status(200).json(roles);
  }
}