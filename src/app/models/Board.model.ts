import {Project} from "./Project.model";
/**
 * Created by kamil on 24/05/17.
 */

export class Board {

    private _id: number;
    private _name: string;
    private _isTemplate: number;

    private _fullFetch: boolean;
    // private _admin: number; //for now amin user id
    // private _projects: Array<Project>;


    constructor(id: number, name: string, isTemplate: number, fullFetch?: boolean) {
        this._id = id;
        this._name = name;
        this._isTemplate = isTemplate;
        this._fullFetch = fullFetch;
    }

    public getName() {
        return this._name;
    }

    public getId() {
        return this._id;
    }
}