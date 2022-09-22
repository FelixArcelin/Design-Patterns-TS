class ObjectBuilder<T extends Record<string, unknown> = {}> {
	constructor(private readonly Object: T) {}

	static create(): ObjectBuilder {
		return new ObjectBuilder({});
	}

	build(): T {
		return this.Object;
	}

	add<K extends string, V>(k: K, val: V): ObjectBuilder<T & { [k in K]: V }> {
		const nextPart = { [k]: val } as { [k in K]: V };
		return new ObjectBuilder({ ...this.Object, ...nextPart });
	}
}

const json = ObjectBuilder.create()
	.add('myK', { trolling: new ObjectBuilder({}) })
	.add('aya', 2)
	.build();

console.log(json);

class House {
	address: string;
	floorN: number;
	Parking: boolean;
	Garden: boolean;
	constructor(houseBuilder: HouseBuilder) {
		this.address = houseBuilder.address;
		this.floorN = houseBuilder.floorNumber;
		this.Parking = houseBuilder.isHavingParking;
		this.Garden = houseBuilder.isHavingGarden;
	}
}

class HouseBuilder {
	private readonly _address: string;
	private _floorN: number = 0;
	private _Parking: boolean = false;
	private _Garden: boolean = false;

	constructor(address: string) {
		this._address = address;
	}

	setFloor(floor: number) {
		this._floorN = floor;
		return this;
	}

	makeParking() {
		this._Parking = true;
		return this;
	}

	makeGarden() {
		this._Garden = true;
		return this;
	}

	build() {
		return new House(this);
	}

	get isHavingParking() {
		return this._Parking;
	}

	get isHavingGarden() {
		return this._Garden;
	}

	get address() {
		return this._address;
	}

	get floorNumber() {
		return this._floorN;
	}
}

const myHouse = new HouseBuilder('666')
	.setFloor(6)
	.makeGarden()
	.makeParking()
	.build();

console.log(myHouse);

