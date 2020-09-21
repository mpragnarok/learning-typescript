import { AxiosPromise } from "axios";

interface ModelAttributes<T> {
    set(update: T): void;
    getALl(): T;
    get<K extends keyof T>(key: K): T[K]; // 165. An Advanced Generic Constraint
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}
export class Model {}
