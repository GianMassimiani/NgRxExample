import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromTrade from '../state-manager/trade.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TradeEffects } from '../state-manager/trade.effect';
import { TradeComponent } from './trade-currency.component';
import { TradeService } from '../services/trade.service';
import { BalanceComponent } from '../balance/balance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: 'trade',
    component: TradeComponent
  }
];

@NgModule({
    declarations: [TradeComponent, BalanceComponent],
  imports: [
    NgChartsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromTrade.tradeFeatureKey, fromTrade.reducer),
    EffectsModule.forFeature([TradeEffects])
  ],
  providers: []
})
export class TradeModule {
}