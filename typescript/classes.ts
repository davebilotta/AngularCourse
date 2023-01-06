class Vehicle {

    drive(): void {
        console.log("Driving ...");
    }

    honk(): void {
        console.log("Beep beep")
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log("DRIVING (CAR)")
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

console.log("")
const rav = new Car();
rav.drive();
rav.honk();
