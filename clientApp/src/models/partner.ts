import { User } from "./user";

export class Partner {
    id: number;//no se si quitarlo de aqui el id
    name: string;
    email: string;
    phone: string;
    createUid: number;//creo que lo tengo que quitar
    countryId: number;
    user:User;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}