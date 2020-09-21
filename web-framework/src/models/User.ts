import { Eventing } from "./Eventing";
export interface UserProps {
    // ? is optional to have
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    public events: Eventing = new Eventing();

    constructor(private data: UserProps) {}

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: UserProps): void {
        // copy update data to this.data
        Object.assign(this.data, update);
    }
}
