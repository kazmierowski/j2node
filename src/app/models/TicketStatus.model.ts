
/**
 * Created by kamil on 29/05/17.
 */

export class TicketStatus {

    private _id: number;
    private _name: string;
    private _alias: string;


    constructor(id: number, name: string, alias: string) {
        this._id = id;
        this._name = name;
        this._alias = alias;
    }

    public getId(): number {
        return this._id;
    }

    public getName(): string {
        return this._name;
    }

    public getAlias(): string {
        return this._alias;
    }
}