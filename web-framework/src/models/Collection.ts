import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

// seconde generic type K
export class Collection<T, K> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(
        public rootUrl: string,
        public deserialize: (json: K) => T // get json data type K and return type T model
    ) {}
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl).then((response: AxiosResponse) => {
            response.data.forEach((value: K) => {
                this.models.push(this.deserialize(value));
            });
            this.trigger("change");
        });
    }
}
