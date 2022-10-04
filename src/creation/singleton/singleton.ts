class mySingleton {
	private static instance: mySingleton;
	private constructor() {}

	public static create(): mySingleton {
		if (!mySingleton.instance) {
			mySingleton.instance = new mySingleton();
		}

		return mySingleton.instance;
	}

	public doThing() {
		console.log('hello');
	}
}

const singleTon = mySingleton.create();

singleTon.doThing();
