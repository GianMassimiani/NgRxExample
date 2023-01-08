import { Injectable, OnDestroy } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { switchMap, of, delay, Subject, takeUntil, map, tap } from "rxjs";
import { TradeService } from "../services/trade.service";
import { tradeAction, tradeActionSuccess } from "./trade.action";

@Injectable()
export class TradeEffects implements OnDestroy {

  makeTrade$ = createEffect(() => 
    this.actions$.pipe(
      ofType(tradeAction),
      tap((t) => console.log("effect")),
      switchMap(
        () => this._tradeService.getTradeToMake$().pipe(
                takeUntil(this._destroy$),
                map(t => tradeActionSuccess({trade: t}))
            )
        )
    )
  );

  constructor(private actions$: Actions,private _tradeService: TradeService) {
  }

  private _destroy$ = new Subject<void>();
    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }
}