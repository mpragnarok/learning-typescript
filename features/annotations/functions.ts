const add = (a: number, b: number) => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

// Annotations for anonymous functions
const multiply = function (a: number, b: number): number {
    return a * b;
};
// void won't return anything at all
const logger = (message: string): void => {
    console.log(message);
};
// never going to actually reach the end of this function, throwing an error and exit the function without returning any value
const throwError = (message: string): never => {
    throw new Error(message);
};

// void here cause we are technically not returning anything, just a chance of us never reaching the end of the function
const throwErrorVoid = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};

/* Destructuring with annotation*/
const todaysWeather = {
    date: new Date(),
    weather: "sunny",
};

const logWeather = ({
    date,
    weather,
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
