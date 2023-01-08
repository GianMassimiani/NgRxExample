import { createReducer, on } from "@ngrx/store";
import { Action } from "redux";
import { initialAccountState } from "../datasource";
import { tradeAction, tradeActionSuccess } from "./trade.action";

export const tradeFeatureKey = 'trade';

export interface Trade {
  currency: string;
  amount: number;
  rate: number;
  date: Date;
}

export interface AccountState {
    balances: { currency: string, balance: number }[];
    tradeHistory: Trade[];
  }


const tradeCurrencyReducer = createReducer(
    initialAccountState,
    on(tradeActionSuccess, (state: AccountState, action: any) => {
      // state is immutable => we always create a new state
      console.log("reducer state, action: ", state, action);
      const t = action.trade;
      const currentBalance = state.balances.filter(b => b.currency == t.currency)[0].balance;
      const newBalance = currentBalance + t.amount;
      const newState: AccountState = {
        ...state, 
        balances: [
          ...state.balances.filter(b => b.currency != t.currency),
          {currency: t.currency, balance: newBalance}
        ], 
        tradeHistory: [...state.tradeHistory, action.trade]};
        console.log("new state: ",  newState);
      return newState;
    }),
  );
  
  export function reducer(state: AccountState | undefined, action: Action) {
    return tradeCurrencyReducer(state, action);
  }