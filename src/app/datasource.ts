import { AccountState } from "./state-manager/trade.reducer";

// All supported currencies for trading
export const currencies: {name: string, symbol: string}[] = [
    { name: 'Euros', symbol: "EUR" },
    { name: 'US Dollars', symbol: "USD" },
    { name: 'CHF', symbol: "CHF" },
    { name: 'British Pounds', symbol: "GBP" },
    { name: 'Japan Yen', symbol: "JPY" },
    { name: 'Chinese Yuan', symbol: "CHY" },
    { name: 'Canadian Dollar', symbol: "CAD" },
  ];

  // Initial account balance for each currency
export const initialAccountState: AccountState = {
    balances: [
      {currency: "USD", balance: 1000},
      {currency: "EUR", balance: 0},
      {currency: "CHF", balance: 0},
      {currency: "GBP", balance: 0},
      {currency: "CAD", balance: 0},
      {currency: "JPY", balance: 0},
      {currency: "CHY", balance: 0}
    ],
    tradeHistory: []
  };