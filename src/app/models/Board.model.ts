/**
 * Created by kamil on 24/05/17.
 */

import {Project} from './Project.model';

export class Board {

    private _id: number;
    private _name: string;
    private _isTemplate: number;

    private _admin: number; //for now amin user id
    private _projects: Array<Project>;
    private _ticketsList: Array<number>;
    private _statusesList: Array<number>;

    private _fullFetch: boolean;

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

    public setStatusesList(statusesList: Array<number>) {
        this._statusesList = statusesList;
    }

    public getStatusesList(): Array<number> {
        return this._statusesList;
    }

    public setFullFetch(fullFetch: boolean) {
        this._fullFetch = fullFetch;
    }

    public getFullFetch(): boolean {
        return this._fullFetch;
    }
}