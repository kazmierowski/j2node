/**
 * Created by kamil on 28/05/17.
 */

import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): any[] {
        let keys = [];
        for (let key in value) {
            keys.push(value[key]);
        }
        return keys;
    }
}