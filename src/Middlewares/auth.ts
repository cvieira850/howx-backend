
import { AuthMiddleware } from "./auth-middleware"
import { Response } from 'express'

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
export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(role)
}
