interface IDrawStrategy {
	draw: () => void;
}

class Circle implements IDrawStrategy {
	draw(): void {
		console.log('drawing a circle');
	}
}

class Square implements IDrawStrategy {
    draw(): void {
        console.log('drawing a square');
    }
}

class ConcreteExample {
    constructor(private s: IDrawStrategy) {}
    setStrategy(strategy: IDrawStrategy) {
        this.s = strategy;
    }
    draw() {
        this.s.draw()
    }
}


function StrategyPattern() {
    const co = new ConcreteExample(new Square())
    co.draw()
    co.setStrategy(new Circle())
    co.draw()
}

StrategyPattern()
