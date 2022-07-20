import { Request, Response } from "express";
import { UpdateRequestService } from "../../services/requests/UpdateRequestService";
import { AuthService } from "../../services/users/AuthService";

export class UpdateRequestController {

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
    const { value, type_payment, client_id } = request.body;

    const service = new UpdateRequestService();
    const result = await service.execute({ id, value, type_payment, client_id });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}