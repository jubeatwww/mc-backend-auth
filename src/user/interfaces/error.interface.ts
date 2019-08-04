import { HttpStatus } from '@nestjs/common';
import { ErrorType } from '../enums/error.enum';

export interface IError {
    type: ErrorType;
    httpStatus: HttpStatus;
    errorMessage: string;
    userMessage: string;
}

export type IErrorMessages<T extends IError = IError> = {
    [key in keyof typeof ErrorType]: T;
};
