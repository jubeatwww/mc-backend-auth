import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserException } from './user.exception';

@Catch()
export class UserExceptionFilter implements ExceptionFilter {
    catch(e: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const req = ctx.getRequest<Request>();
        const res = ctx.getResponse<Response>();

        if (e instanceof HttpException) {
            res.status(e.getStatus()).json({
                statusCode: e.getStatus(),
                timestamp: new Date().toISOString(),
                path: req.url,
            });
        } else if (e instanceof UserException) {
            return res.status(e.httpStatus).json({ ...e });
        } else {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
