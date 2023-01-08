import { Injectable, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, delay, Observable, of, Subject, switchMap, takeUntil } from "rxjs";
import { tradeAction } from "../state-manager/trade.action";
import { AccountState, Trade } from "../state-manager/trade.reducer";

export type Currency = "EUR" | "CHF" | "GBP" | "USD" | "CAD" | "JPY" | "CHY";
export const currencies: Currency[] = ["EUR", "CHF", "GBP", "USD", "CAD", "JPY", "CHY"];

@Injectable({
    providedIn: "root"
})
export class TradeService implements OnDestroy {
    private _tradeToMake = new BehaviorSubject<Trade>({} as any as Trade);

    /**
     *
     */
    constructor(private store: Store<AccountState>) {
    }

    getTradeToMake$(): Observable<Trade> {
        return this._tradeToMake.asObservable();
    }

    makeTrade(trade: Trade): Observable<boolean> {
        this._tradeToMake.next(trade);
        console.log("dispatching...");
        this.store.dispatch(tradeAction());
        return of(true);
    }

    private _destroy$ = new Subject<void>();
    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }
}