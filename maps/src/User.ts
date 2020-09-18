import faker from "faker";
// never use export default in TS
// export default "red";
export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
}
