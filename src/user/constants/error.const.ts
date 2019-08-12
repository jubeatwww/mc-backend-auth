import { HttpStatus } from '@nestjs/common';
import { IErrorMessages, IError } from '../interfaces/error.interface';
import { ErrorType } from '../enums/error.enum';

export const ErrorMessages: IErrorMessages = {
    [ErrorType.USER_EXISTS]: {
        type: ErrorType.USER_EXISTS,
        httpStatus: HttpStatus.UNPROCESSABLE_ENTITY,
        errorMessage: 'User exists',
        userMessage: 'Username exists',
    },
    [ErrorType.INFO_REQUIRED]: {
        type: ErrorType.INFO_REQUIRED,
        httpStatus: HttpStatus.UNPROCESSABLE_ENTITY,
        errorMessage: 'User exists',
        userMessage: 'Username exists',
    },
    [ErrorType.USER_NOT_EXISTS]: {
        type: ErrorType.USER_NOT_EXISTS,
        httpStatus: HttpStatus.FORBIDDEN,
        errorMessage: 'User not exists',
        userMessage: 'Username not found',
    },
};
