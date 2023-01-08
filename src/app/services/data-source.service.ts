import { Injectable } from "@angular/core";
import { delay, from, of } from "rxjs";
import { initialAccountState } from "../datasource";

@Injectable({providedIn: "root"})
export class DataSourceService {
    
    private _accState = initialAccountState;

    /*Mocking API call to fetch current account balance */
    getAccountState() {
        return of(this._accState).pipe(delay(500));
    }
}