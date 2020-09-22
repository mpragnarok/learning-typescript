class Boat {
    color: string = "red";

    get formattedColor(): string {
        return `This boats color is ${this.color}`;
    }

    @logError
    pilot(): void {
        throw new Error();
        console.log("swish");
    }
}
// PropertyDescriptor(ES5 JS): An object that has some configuration options around a property defined on an object
function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
        try {
            method();
        } catch (e) {
            console.log("Something wrong");
        }
    };
}

new Boat().pilot();
