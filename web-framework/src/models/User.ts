import axios, { AxiosResponse } from "axios";
interface UserProps {
    // ? is optional
    id?: number;
    name?: string;
    age?: number;
}

// type alias
type Callback = () => void;

export class User {
    events: { [key: string]: Callback[] } = {};

    constructor(private data: UserProps) {}
    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: UserProps): void {
        // copy update data to this.data
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void {
        // register events
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach((callback) => {
            callback();
        });
    }
    fetch(): void {
        axios
            .get(`http://localhost:3000/users/${this.get("id")}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }
    save(): void {
        const id = this.get("id");
        if (this.get("id")) {
            // put
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        } else {
            // post
            axios.post(`http://localhost:3000/users/`, this.data);
        }
    }
}
