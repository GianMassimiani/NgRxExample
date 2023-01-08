import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountState, tradeFeatureKey } from "./trade.reducer";

export const selectGuestState = createFeatureSelector<AccountState>(
    tradeFeatureKey
  );
  
  export const selectBalance = createSelector(
    selectGuestState,
    state => state.balances
  );
  
  export const selectTradeHistory = createSelector(
    selectGuestState,
    state => state.tradeHistory
  );