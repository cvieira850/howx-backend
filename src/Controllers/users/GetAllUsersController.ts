import { Request, Response } from "express";
import { AuthService } from "../../services/users/AuthService";
import { GetAllUsersService } from "../../services/users/GetAllUsersService";

export class GetAllUsersController {
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
    const service = new GetAllUsersService();

    const users = await service.execute();

    return response.status(200).json(users);
  }
}