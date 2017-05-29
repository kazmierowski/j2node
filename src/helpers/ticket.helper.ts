/**
 * Created by kamil on 29/05/17.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class TicketFilters {

    constructor() {}

    public filterTicketsSetByStatus(tickets, status: number) {
        let readyObject = {};

        for(let value in tickets) {
            if(tickets.hasOwnProperty(value)) {
                if(tickets[value].getStatus() === status) {
                    readyObject[tickets[value].getId()] = tickets[value];
                    console.log(tickets[value]);
                }
            }
        }
        return readyObject;
    }
}