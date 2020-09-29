import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Order } from '../order/order.component';

export class Order{
  constructor(
    public userid:string,
    public id:string,
    public time:Date,
    public type:string,
    public buy_or_sell:string,
    public quantity:string,
    public price:string,
    public all_or_none:number,
    public min_fill:string,
    public status:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private orderClient:HttpClient) { }

  public getOrders(){
    console.log("getting orders");
    return this.orderClient.get<Order[]>("http://localhost:8080/order");
  }

  public addOrder(order){
    console.log("order to be added : " + order);
    return this.orderClient.post<Order>("http://localhost:8080/order", order);
  }
}
