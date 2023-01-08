import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartOptions, ChartType } from 'chart.js';

import { ChartDataset } from 'chart.js';
import { filter, from, map, Observable, of, takeUntil, tap } from 'rxjs';
import { BaseComponent } from '../base.component';
import { DataSourceService } from '../services/data-source.service';
import { currencies, TradeService } from '../services/trade.service';
import { tradeAction } from '../state-manager/trade.action';
import { AccountState, Trade } from '../state-manager/trade.reducer';
import { selectBalance } from '../state-manager/trade.selector';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent extends BaseComponent implements OnInit {



// Pie chart data
pieChartLabels: string[] = [];
pieChartData: ChartDataset[] = [{ data: [] }];
pieChartOptions: ChartOptions = {
  responsive: true,
};
pieChartLegend = true;
pieChartType: ChartType  = 'pie';

public totalBalance: number = 0;
public balances$: Observable<{currency: string, balance: number}[]> = this.store.select(selectBalance);

constructor(private store: Store<AccountState>, private _tradeService: TradeService, public _dataSourceService: DataSourceService) { 
  super();

}

ngOnInit(): void {
  this.balances$.pipe(
    takeUntil(this.unsubscribeAll$),
    map(bs => bs.filter(b => b.balance > 0)),
    tap(bs => {
      console.log("sdfsdf", bs);
      // Compute total balance
      this.totalBalance = bs.reduce((acc, b) => acc + b.balance, 0);
      // Populate pie chart data
      this.pieChartLabels = bs
        .map(b => b.currency);
      this.pieChartData[0].data = bs
        .map(b => b.balance);
    })
    ).subscribe();
}


}
