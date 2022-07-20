import { Request, Response } from "express";
import { LoadRoleByIdService } from "../../services/roles/LoadRoleByIdService";

export class LoadRoleByIdController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new LoadRoleByIdService();
    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}