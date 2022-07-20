import { Request, Response } from "express";
import { DeleteStateService } from "../../services/states/DeleteStateService";

export class DeleteStateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new DeleteStateService();

    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).end()
  }
}