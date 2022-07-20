import { Request, Response } from "express";
import { AuthService } from "../../services/users/AuthService";
import { CreateUserService } from "../../services/users/CreateUserService";
import { LoadUserByIdService } from "../../services/users/LoadUserByIdService";
import { UpdateUSerAccessTokenService } from "../../services/users/UpdateUserAccessTokenService";

export class MeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const accessToken = request.headers['x-access-token']
    let account;
    if (accessToken && typeof accessToken === 'string') {
      const serviceAuth = new AuthService()
      account = await serviceAuth.execute({ access_token:accessToken })
      if (account instanceof Error) {
        return response.status(403).json(account.message)
      }
      if (account) {
        request.headers.accountId = account.id
      }
    } else {
      return response.status(403).json('forbidden')
    }
    const service = new LoadUserByIdService();
    const result = await service.execute( account.id);

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(200).json(result)
  }
}