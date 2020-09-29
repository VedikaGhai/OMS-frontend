import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddordersComponent } from './addorders/addorders.component';
import { LoginComponent } from './login/login.component';
import { OrderbookComponent } from './orderbook/orderbook.component';
import { TradesComponent } from './trades/trades.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'orderbook', component: OrderbookComponent, canActivate:[AuthGaurdService]},
  {path: 'addorders', component: AddordersComponent, canActivate:[AuthGaurdService]},
  {path: 'trades', component: TradesComponent, canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }