export class ApiError extends Error{
    errors;
    message;
    constructor(message, errors = []) {
        super(message);
        this.errors = errors;
        this.message = message;
    }
}