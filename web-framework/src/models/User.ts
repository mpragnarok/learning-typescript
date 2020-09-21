interface UserProps {
    // ? is optional
    name?: string;
    age?: number;
}

export class User {
    constructor(private data: UserProps) {}
    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: UserProps): void {
        // copy update data to this.data
        Object.assign(this.data, update);
    }
}
