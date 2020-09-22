import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            "click:.set-age": this.onSetAgeClick,
            "click:.set-name": this.onSetNameClick,
            "click:.save-model": this.onSaveClick,
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

    onSaveClick = (): void => {
        this.model.save();
    };

    template(): string {
        return `
        <div>
            
            <input placeholder="${this.model.get("name")}"
            />
            <button class="set-name" >Change Name</button>
            <button class="set-age">Set random age</button>
            <button class="save-model">Save User</button>
        </div>
        `;
    }
}
