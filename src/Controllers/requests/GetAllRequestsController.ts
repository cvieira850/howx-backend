import { Request, Response } from "express";
import { GetAllRequestsService } from "../../services/requests/GetAllRequestsService";
import { AuthService } from "../../services/users/AuthService";

export class GetAllRequestsController {
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
    const service = new GetAllRequestsService();

    const requests = await service.execute();

    return response.status(200).json(requests);
  }
}