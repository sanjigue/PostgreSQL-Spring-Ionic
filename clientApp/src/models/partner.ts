import { User } from "./user";
import { Country } from "./country";

export class Partner {
    id: number;//no se si quitarlo de aqui el id
    name: string;
    email: string;
    phone: string;
    createUid: number;//creo que lo tengo que quitar
    country: Country;
    user:User;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}