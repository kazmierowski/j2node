/**
 * Created by Kamil on 25.04.2017.
 */

export class Column {

  private _name: string;
  private _maxLength: string;
  private _status: number;


  constructor(name: string, maxLength: string, status: number) {
    this._name = name;
    this._maxLength = maxLength;
    this._status = status;
  }

  public getName(): string {
    return this._name;
  }

  public getStatus(): number {
    return this._status;
  }
}