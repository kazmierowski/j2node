/**
 * Created by kamil on 28/05/17.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class FilterByKey {

    constructor() {}

    public object(jsObject: object, valueSet: Array<any>) {
        const readyObject = {};

        for (const value of valueSet) {
            if (jsObject[value] !== undefined) {
                readyObject[value] = jsObject[value];
            }
        }
        return readyObject;
    }
}