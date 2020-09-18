class Vehicle {
    // shorthand
    constructor(public color: string) {}
    protected honk(): void {
        console.log("beep");
    }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
    // inheritance fields
    constructor(public wheels: number, color: string) {
        super(color);
    }
    // overriden method
    private drive(): void {
        console.log("vroom");
    }
    startDrivingProcess(): void {
        this.drive();
        //honk only can called in child class and method in Vehicle class
        this.honk();
    }
}

const newCar = new Car(4, "red");
newCar.startDrivingProcess();
