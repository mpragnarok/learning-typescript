import { User } from "../models/User";

export class UserForm {
    constructor(public parent: Element, public model: User) {
        this.bindModel();
    }

    // rebind the events and re-render the html page
    bindModel(): void {
        // when event
        this.model.on("change", () => {
            this.render();
        });
    }
    eventsMap(): { [key: string]: () => void } {
        return {
            "click:.set-age": this.onSetAgeClick,
            "click:.set-name": this.onSetNameClick,
        };
    }
    // use arrow function to bind the value of this inside of function
    // use arrow function for define event handler
    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    };
    onSetNameClick = (): void => {
        const input = this.parent.querySelector("input");
        // querySelector default value is null
        // solve by adding a type guard if(input)
        if (input) {
            const name = input.value;
            this.model.set({ name });
        }
    };

    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <div>User name: ${this.model.get("name")}</div>
            <div>User age: ${this.model.get("age")}</div>
            <input/>
            <button class="set-name" >Change Name</button>
            <button class="set-age">Set random age</button>
        </div>
        `;
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
