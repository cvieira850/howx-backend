import { Request, Response } from "express";
import { LoginService } from "../../services/users/LoginService";
import { UpdateUSerAccessTokenService } from "../../services/users/UpdateUserAccessTokenService";

export class LoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const service = new LoginService();

    const result = await service.execute({ email, password });
    console.log(result)
    if(result instanceof Error) {
      return response.status(403).json(result.message)
    }

    const accessTokenService = new UpdateUSerAccessTokenService();
    const user = await accessTokenService.execute({ id: result.id });
    return response.status(200).json({data:user})
  }
}