import { Partner } from "./partner";

export class User {
    id: number;
    login: string;
    password: string;
    partner: Partner;
    partnerId: any;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}