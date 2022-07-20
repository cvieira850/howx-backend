import { Request, Response } from "express";
import { CreateRoleService } from "../../services/roles/CreateRoleService";

export class CreateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, weight } = request.body;

    const service = new CreateRoleService();

    const result = await service.execute({ name, weight });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}