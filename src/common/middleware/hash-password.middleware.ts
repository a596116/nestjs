import { Injectable, NestMiddleware } from '@nestjs/common'
// import { NextFunction } from 'express'
import { addSalt, encript } from 'src/utils/Encription'

@Injectable()
export class HashPasswordMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next) {
    let userPassword = req.body['password']

    if (userPassword) {
      const salt = addSalt()
      userPassword = encript(userPassword, req.body['name'])
      req.body['password'] = userPassword
      req.body['salt'] = salt
    }
    next()
  }
}
