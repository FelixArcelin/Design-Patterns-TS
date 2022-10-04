abstract class Factory {
	public abstract create(): Product;
}

class ConcreteFactory extends Factory {
	create(): Book {
		return new Book();
	}
}

interface Product {
	doThing(): void;
}

class Book implements Product {
    constructor() {}
	public pages: Array<string> = ['First Page', 'Second Page'];
	doThing(): void {
		for (const page of this.pages) {
			console.log(page);
		}
	}
}

function FactoryPattern() {
	const cf = new ConcreteFactory();
	const book = cf.create()
    book.doThing()
}

FactoryPattern()