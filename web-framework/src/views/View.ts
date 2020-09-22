import { Model } from "../models/Model";

// <T extends Model<K>, K> is Type Generic constraints
export abstract class View<T extends Model<K>, K> {
    regions: { [key: string]: Element } = {};

    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }
    regionsMap(): { [key: string]: string } {
        // init with {}
        return {};
    }

    eventsMap(): { [key: string]: () => void } {
        // init with {}
        return {};
    }

    //  nesting with regionMap

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

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element;
            }
        }
    }

    render(): void {
        this.parent.innerHTML = "";
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);
        this.parent.append(templateElement.content);
    }
}
