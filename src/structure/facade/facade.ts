class GenericClass<T> {
	print(t: T | unknown): void {
		console.log(t);
	}
}

class Facade<T, K> {
	private firstClass: GenericClass<T>;
	private secondClass: GenericClass<K>;
	constructor() {
		this.firstClass = new GenericClass<T>();
		this.secondClass = new GenericClass<K>();
	}

	printAll(): void {
		console.log(this.firstClass.print('hello'));
		console.log(this.secondClass.print(1));
	}
}

function FacadePattern() {
	const facade = new Facade<string, number>();
	facade.printAll();
}

FacadePattern();
