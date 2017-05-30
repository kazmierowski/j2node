/**
 * Created by kamil on 20/05/17.
 */

export class User {

    // user table variables
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _phone: string;
    private _country: string;
    private _city: string;
    private _street: string;

    // user view variables

    private _userProjects: object; // change to Project type
    private _userBoards: object; // change to Board type


    constructor(id: number, firstName: string, lastName: string, email: string, phone: string, country: string, city: string, street: string, userProjects: Array<number>, userBoards: Array<number>) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phone = phone;
        this._country = country;
        this._city = city;
        this._street = street;
        this._userProjects = userProjects;
        this._userBoards = userBoards;
    }

    public getUserFirstName(): string {
        return this._firstName;
    }

    public getUserProjects() {
        return this._userProjects;
    }

    public setUserProjects(userProjects) {
        this._userProjects = userProjects;
    }
}