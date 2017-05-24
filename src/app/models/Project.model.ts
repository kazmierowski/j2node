import {Board} from "./Board.model";
/**
 * Created by kamil on 24/05/17.
 */

export class Project {

    private _id: number;
    private _name: string;

    private _admin: number; // for now amin user id
    private _boardsList: Array<Board>;
    private _usersList: Array<number>; // list of user ids
    private _statusesList: Array<number>; // statuses ids


    constructor(id: number, name: string, admin: number, boardsList: Array<Board>, usersList: Array<number>, statusesList: Array<number>) {
        this._id = id;
        this._name = name;
        this._admin = admin;
        this._boardsList = boardsList;
        this._usersList = usersList;
        this._statusesList = statusesList;
    }
}