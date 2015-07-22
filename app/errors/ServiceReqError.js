'use strict';

function ServiceReqError (code, status, error) {
    if (!error || ! error instanceof Error) {
        if (! error) {
            error = new Error('error');
        } else if (typeof error === 'object' || typeof error === 'function') {
            error = new Error(JSON.stringify(error));
        } else {
            error = new Error(error);
        }

    }
    Error.call(this, error.message);
    Error.captureStackTrace(this, this.constructor);
    this.code = code;
    this.name = 'ServiceReqError';
    this.status = status;
    this.message = error.message;
    this.inner = error;
}

ServiceReqError.prototype = Object.create(Error.prototype);
ServiceReqError.prototype.constructor = ServiceReqError;

module.exports = ServiceReqError;
