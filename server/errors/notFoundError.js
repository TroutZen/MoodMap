function NotFoundError(code, error) {
	// prototypal inheritence pattern from Error constructor
	Error.call(this, error.message);
	Error.captureStackTrace(this, this.constructor);
	this.name = "NotFoundError";
	this.message = typeof error === "undefined" ? undefined : error.message;
	this.code = typeof code === "undefined" ? "404" : code;
	this.status = 404;
	this.inner = error;	
}

// sets up prototypal inheritence
NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

module.exports = NotFoundError;