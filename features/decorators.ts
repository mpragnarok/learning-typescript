class Boat {
    @testDecorator
    color: string = "red";
    @testDecorator
    get formattedColor(): string {
        return `This boats color is ${this.color}`;
    }

    @logError("Opps boat was sunk in ocean")
    pilot(): void {
        throw new Error();
        console.log("swish");
    }
}

function testDecorator(target: any, key: string) {
    // !target is a prototype of Boat class, prototype in JS only store method's definition, we cannot read the property of prototype
    console.log(target); // Boat{ pilot: ()=>void}
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
