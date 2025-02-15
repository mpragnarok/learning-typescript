// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean;
//     summary(): string;
// }
interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const carbonDrink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    },
};

// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(vehicle.summary());
// };
// printVehicle(oldCivic);

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
// reuse code with interface
printSummary(carbonDrink);
