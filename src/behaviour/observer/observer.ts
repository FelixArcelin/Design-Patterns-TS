interface IObservable {
	attach(observer: IObserver): void;
	detach(observer: IObserver): void;
	notify(): void;
}
interface IObserver {
	update(o: IObservable): void;
}

class concreteObserver implements IObserver {
	update(co: concreteObservable): void {
        console.log("changed state ! : "+ co.state)
    }
}

class concreteObservable implements IObservable {
	public state: number = 0;
	private observers: IObserver[] = [];
    setState(n: number) {
        this.state = n;
        this.notify()
    }

	attach(observer: IObserver): void {
        const exists = this.observers.includes(observer);

        if (!exists) {
            this.observers.push(observer);
        }
    }

	detach(observer: IObserver): void {
        const exists = this.observers.indexOf(observer);
        if (exists) {
            this.observers.splice(exists, 1)
        }

    }

	notify(): void {
        for (const observer of this.observers) {
            observer.update(this)
        }
    }
}


function ObserverPattern() {
    const co = new concreteObservable()
    const obs = new concreteObserver()

    co.attach(obs);
    co.setState(10);
    co.detach(obs);

}

ObserverPattern()