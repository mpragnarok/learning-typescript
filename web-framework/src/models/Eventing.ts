// type alias
type Callback = () => void;

export class Eventing {
    events: { [key: string]: Callback[] } = {};

    // turn into arrow function to make `this` always equals to the Attributes
    on = (eventName: string, callback: Callback): void => {
        // register events
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };
    // turn into arrow function to make `this` always equals to the Attributes
    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach((callback) => {
            callback();
        });
    };
}
