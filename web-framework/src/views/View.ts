import { Model } from "../models/Model";

// <T extends Model<K>, K> is Type Generic constraints
export abstract class View<T extends Model<K>, K> {
    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    abstract eventsMap(): { [key: string]: () => void };
    abstract template(): string;
    // rebind the events and re-render the html page
    bindModel(): void {
        // when event
        // ! Property 'on' does not exist on type 'T'.
        // Fix it with Type Generic constraints
        this.model.on("change", () => {
            this.render();
        });
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMaps = this.eventsMap();
        for (let eventKey in eventsMaps) {
            const [eventName, selector] = eventKey.split(":");

            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMaps[eventKey]);
            });
        }
    }

    render(): void {
        this.parent.innerHTML = "";
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
    }
}
