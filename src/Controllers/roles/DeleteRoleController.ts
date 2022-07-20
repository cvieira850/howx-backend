import { Request, Response } from "express";
import { DeleteRoleService } from "../../services/roles/DeleteRoleService";

export class DeleteRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new DeleteRoleService();

    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).end()
  }
}