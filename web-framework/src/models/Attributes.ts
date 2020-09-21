export class Attributes<T> {
    constructor(private data: T) {}
    // <K can be one of the T>(take up the type K): look up the type K inside T
    // turn into arrow function to make `this` always equals to the Attributes
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    };

    set(update: T): void {
        // copy update data to this.data
        Object.assign(this.data, update);
    }
}
