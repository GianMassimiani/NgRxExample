import { createAction, props } from "@ngrx/store";
import { Trade } from "./trade.reducer";

export enum CurrencyActionTypes {
    TRADE_CURRENCY = '[Currency] Trade Currency',
    TRADE_CURRENCY_SUCC = '[Currency] Trade Currency Success',
    TRADE_CURRENCY_FAIL = '[Currency] Trade Currency Failed'
  }

  export const tradeAction = createAction(
    CurrencyActionTypes.TRADE_CURRENCY
  );
  
  export const tradeActionSuccess = createAction(
    CurrencyActionTypes.TRADE_CURRENCY_SUCC,
    props<{ trade: Trade}>()
  );

  export const tradeCurrencyActionFailure = createAction(
    CurrencyActionTypes.TRADE_CURRENCY_FAIL,
    props<{ error: any}>()
  );