export class Partner {
    id: number;
    name: string;
    email: string;
    phone: string;
    createUid: number;
    countryId: number;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}