import axios, { AxiosPromise } from "axios";

interface HasId {
    id?: number;
}

//  Class Sync has to satisfy HasId interface
export class ApiSync<T extends HasId> {
    constructor(public rootUrl: string) {}
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }
    save(data: T): AxiosPromise {
        // generate tsconfig file(strict: true) to add undefined type to id:(number | undefined), we'll generate it back afterward
        const { id } = data;
        if (id) {
            // put
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            // post
            return axios.post(this.rootUrl, data);
        }
    }
}
