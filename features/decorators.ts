/*
We can use decorators on:
 static methods, accessories and properties */

@classDecorator
class Boat {
    @testDecorator
    color: string = "red";
    @testDecorator
    get formattedColor(): string {
        return `This boats color is ${this.color}`;
    }

    @logError("Opps boat was sunk in ocean")
    pilot(
        @parameterDecorator speed: string,
        @parameterDecorator generateWake: boolean
    ): void {
        if (speed === "fast") {
            console.log("swish");
        } else {
            console.log("nothing");
        }
    }
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index);
}
function testDecorator(target: any, key: string) {
    // !target is a prototype of Boat class, prototype in JS only store method's definition, we cannot read the property of prototype
    console.log(target); // Boat{ pilot: Function}
    console.log(target.color); // undefined
    console.log(key);
}

// PropertyDescriptor(ES5 JS): An object that has some configuration options around a property defined on an object
function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;
        desc.value = function () {
            try {
                method();
            } catch (e) {
                console.log(errorMessage);
            }
        };
    };
}

// new Boat().pilot();
