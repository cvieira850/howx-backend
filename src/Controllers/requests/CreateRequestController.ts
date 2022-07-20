import { Request, Response } from "express";
import { CreateRequestService } from "../../services/requests/CreateRequestService";
import { AuthService } from "../../services/users/AuthService";

export class CreateRequestController {
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
    const { value, type_payment, client_id, name } = request.body;

    const service = new CreateRequestService();

    const result = await service.execute({ value, type_payment, client_id, name });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}