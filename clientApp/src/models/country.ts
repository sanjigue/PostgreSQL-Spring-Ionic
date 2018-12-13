export class Country {
    id: number;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}