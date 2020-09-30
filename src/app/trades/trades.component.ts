import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TradeDataSource, TradeItem, EXAMPLE_DATA } from './trades-datasource';
import { MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface Idata {
  tradeId: number;
  tradeTime: Date;
  quantity: number;
  price: number;
  buyId: number;
  sellId: number;

}

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements AfterViewInit, OnInit {

  IsWait:boolean = true ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TradeItem>;
  //dataSource: TradeDataSource;

  displayedColumns = ['tradeId','tradeTime','quantity','price','buyId','sellId'];
  dataSource = new MatTableDataSource<TradeItem>();

  constructor(
    private httpClient: HttpClient
  ) { }
  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  ngOnInit() {
    //this.dataSource = new TradeDataSource();
    //this.dataSource = new TradeDataSource();
    this.dataSource = new MatTableDataSource<any>(EXAMPLE_DATA);
  }

  

}
