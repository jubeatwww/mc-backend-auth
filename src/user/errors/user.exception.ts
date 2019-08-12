import { ErrorType } from '../enums/error.enum';
import { IError } from '../interfaces/error.interface';
import { ErrorMessages } from '../constants/error.const';

export class UserException extends Error {

    public errorCode: ErrorType;
    public httpStatus: number;
    public errorMessage: string;
    public userMessage: string;

    constructor(errorCode: ErrorType) {
        super();
        const errorMessageConfig: IError = ErrorMessages[errorCode];
        if (!errorMessageConfig) {
            throw new Error('Unable to find message code error.');
        }
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.httpStatus = errorMessageConfig.httpStatus;
        this.errorCode = errorCode;
        this.errorMessage = errorMessageConfig.errorMessage;
        this.userMessage = errorMessageConfig.userMessage;
    }
}
