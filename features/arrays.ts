const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Multiple types in arrays
// note: we put the annotation even is an empty array to avoid any type
const importantDates: (Date | string)[] = [];
importantDates.push("2020-10-10");
importantDates.push(new Date());
