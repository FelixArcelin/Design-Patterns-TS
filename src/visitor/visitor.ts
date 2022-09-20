interface IVisitable {
	accept: (v: IVisitor) => void;
}

interface IVisitor {
	visit: (v: Example) => void;
}

class VisitorIncrement implements IVisitor {
	visit(e: Example): void {
        e.x = 1;
        e.y = 1;
	}
}

class Example implements IVisitable {
	constructor(public x: number = 0, public y: number = 0) {}

	accept(v: IVisitor): void {
		v.visit(this);
	}
}

function Visitor() {
    const e = new Example();
    e.accept(new VisitorIncrement())
    console.log(e.x)
}

Visitor()