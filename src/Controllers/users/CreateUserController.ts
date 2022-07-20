import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";
import { UpdateUSerAccessTokenService } from "../../services/users/UpdateUserAccessTokenService";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, role_id, password } = request.body;

    const service = new CreateUserService();

    const result = await service.execute({ name, email, role_id, password });
  
    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    const accessTokenService = new UpdateUSerAccessTokenService();
    const user = await accessTokenService.execute({ id: result.id });
    return response.status(200).json(user)
  }
}