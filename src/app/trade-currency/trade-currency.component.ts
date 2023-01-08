import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { currencies } from '../datasource';
import { TradeService } from '../services/trade.service';
import { tradeAction } from '../state-manager/trade.action';
import { AccountState, Trade } from '../state-manager/trade.reducer';
import { selectBalance } from '../state-manager/trade.selector';

@Component({
  selector: 'app-trade-currency',
  templateUrl: './trade-currency.component.html',
  styleUrls: ['./trade-currency.component.scss']
})
export class TradeComponent implements OnInit {

  fromCurrencies: any[] = JSON.parse(JSON.stringify(currencies));
  toCurrencies: any[] = JSON.parse(JSON.stringify(currencies));

  selectedFromCurrency: string = "Euros";
  selectedToCurrency: string = "US Dollars";

  constructor(private store: Store<AccountState>, private _tradeService: TradeService) {
  }

  ngOnInit(): void {
  }

  onFromCurrencyChange() {
    this.toCurrencies = JSON.parse(JSON.stringify(currencies));
    this.toCurrencies = this.toCurrencies.filter(currency => currency.name !== this.selectedFromCurrency);
  }
  
  onToCurrencyChange() {
    this.fromCurrencies = JSON.parse(JSON.stringify(currencies));
    this.fromCurrencies = this.fromCurrencies.filter(currency => currency.name !== this.selectedToCurrency);
  }
  
  makeTrade() {
    const index = Math.floor(Math.random() * currencies.length);
    const trade: Trade = {
      currency: currencies[index].symbol,
      amount: 1000*Math.random(),
      rate: Math.random(),
      date: new Date()
    };
    this._tradeService.makeTrade(trade);
  }
  

}