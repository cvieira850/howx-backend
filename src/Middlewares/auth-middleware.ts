import { Response } from 'express';
import { AuthService } from '../services/users/AuthService';


export type HttpRequest = {
  body?: any
  headers?: any
  params?: any
  query?: any
  locals?: any
  accountId?: any
}
export interface Middleware {
  handle: (httpRequest: HttpRequest, response: Response, next) => Promise<Response>
}
export class AuthMiddleware implements Middleware {
  constructor (
    private readonly role?: string
  ) {}

  async handle (httpRequest: HttpRequest, response: Response, next): Promise<Response<any>> {
    const accessToken = httpRequest.headers['x-access-token']
    if (accessToken) {
      const service = new AuthService()
      const account = await service.execute({ access_token:accessToken, role_id: this.role })
      if (account instanceof Error) {
        return response.status(403).json(account.message)
      }
      if (account) {
        httpRequest.headers.accountId = account.id
        next()
      }
    }
    return response.status(403).json({ error: 'Unauthorized' })
  }
}
