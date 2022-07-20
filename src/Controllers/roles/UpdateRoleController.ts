import { Request, Response } from "express";
import { UpdateRoleService } from "../../services/roles/UpdateRoleService";

export class UpdateRoleController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, weight } = request.body;

    const service = new UpdateRoleService();
    const result = await service.execute({ id, name, weight });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}