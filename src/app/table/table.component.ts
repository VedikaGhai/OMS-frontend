import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
// import { TableDataSource, TableItem } from './table-datasource';
import { MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface Idata {
    id: number;
    buyOrSell: string;
    orderTime: string;
    quantity: number;
    orderType: string;
    price: number;
    orderStatus: string;
    allorNone: number;
    minFill: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  IsWait:boolean = true ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<TableItem>;
  // dataSource: TableDataSource;

  displayedColumns = ['id','buyOrSell','orderTime','quantity','orderType','price','orderStatus'];
  dataSource = new MatTableDataSource<Idata>();
  selected = 'NONE';
    constructor(
      private httpClient: HttpClient
    ) { }

  ngOnInit() {
    // this.dataSource = new TableDataSource();
    this.httpClient.get('http://localhost:8080/orders')
        .subscribe((data: Idata[]) => {
          this.dataSource.data = data;
          console.log(data)
        });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    // this.IsWait=false;

  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  // onClickMe(selected: string) {
  //   console.log(this.selected)
  // }

}
