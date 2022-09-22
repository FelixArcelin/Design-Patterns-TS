interface Handler {
	setNext(handler: Handler): Handler;

	handle(request: string): any;
}

abstract class AbstractHandler implements Handler {
	private nextHandler: Handler | undefined;
	public setNext(handler: Handler): Handler {
		this.nextHandler = handler;
		return handler;
	}

	public handle(request: string): any {
		if (this.nextHandler) {
			return this.nextHandler.handle(request);
		}
		return null;
	}
}

class CircleHandler extends AbstractHandler {
	public handle(request: string): string {
		if (request === 'Circle') {
			return `Shape: I'll get a ${request}.`;
		}
		return super.handle(request);
	}
}

class SquareHandler extends AbstractHandler {
	public handle(request: string): string {
		if (request === 'Square') {
			return `Shape: I'll get a ${request}.`;
		}
		return super.handle(request);
	}
}

class TriangleHandler extends AbstractHandler {
	public handle(request: string): string {
		if (request === 'Triangle') {
			return `Shape: I'll get a ${request}.`;
		}
		return super.handle(request);
	}
}

function clientCode(handler: Handler) {
	const shapes = ['Circle', 'Square', 'Not a Shape'];

	for (const shape of shapes) {
		console.log(`Client: Who wants a ${shape}?`);

		const result = handler.handle(shape);
		if (result) {
			console.log(`  ${result}`);
		} else {
			console.log(`  ${shape} was left untouched.`);
		}
	}
}

function chainOfResPattern() {
	const circle = new CircleHandler();
	const square = new SquareHandler();
	const triangle = new TriangleHandler();

	circle.setNext(square).setNext(triangle);

	console.log('Chain: circle > square > triangle\n');
	clientCode(circle);

	console.log('Subchain: square > triangle\n');
	clientCode(square);
}

chainOfResPattern();
