import { Request, Response } from "express";
import { DeleteRequestService } from "../../services/requests/DeleteRequestService";
import { AuthService } from "../../services/users/AuthService";

export class DeleteRequestController {
  async handle(request: Request, response: Response): Promise<Response> {
    const accessToken = request.headers['x-access-token']
    if (accessToken && typeof accessToken === 'string') {
      const serviceAuth = new AuthService()
      const account = await serviceAuth.execute({ access_token:accessToken })
      if (account instanceof Error) {
        return response.status(403).json(account.message)
      }
      if (account) {
        request.headers.accountId = account.id
      }
    } else {
      return response.status(403).json('forbidden')
    }
    const { id } = request.params;

    const service = new DeleteRequestService();

    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).end()
  }
}