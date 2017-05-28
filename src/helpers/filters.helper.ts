/**
 * Created by kamil on 28/05/17.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class FilterByKey {

    constructor() {}

    public object(jsObject: Object, valueSet: Array<any>) {
        let readyObject = {};

        for(let value of valueSet) {
            if(jsObject[value] !== undefined) {
                readyObject[value] = jsObject[value];
            }
        }
        return readyObject;
    }

}