import { Component, VERSION, OnInit } from '@angular/core';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  cars: Car[];
  cols: any[];
  sales: any[];

  ngOnInit() {
    this.cars = [
      { vin: '12345', year: 2005, brand: 'Toyota', color: 'black' },
      { vin: '67891', year: 2006, brand: 'Hyunday', color: 'blue' },
    ];

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
    ];

    this.sales = [
      {
        brand: 'Apple',
        lastYearSale: '51%',
        thisYearSale: '40%',
        lastYearProfit: '$54,406.00',
        thisYearProfit: '$43,342',
      },
      {
        brand: 'Samsung',
        lastYearSale: '83%',
        thisYearSale: '96%',
        lastYearProfit: '$423,132',
        thisYearProfit: '$312,122',
      },
      {
        brand: 'Microsoft',
        lastYearSale: '38%',
        thisYearSale: '5%',
        lastYearProfit: '$12,321',
        thisYearProfit: '$8,500',
      },
      {
        brand: 'Philips',
        lastYearSale: '49%',
        thisYearSale: '22%',
        lastYearProfit: '$745,232',
        thisYearProfit: '$650,323,',
      },
      {
        brand: 'Song',
        lastYearSale: '17%',
        thisYearSale: '79%',
        lastYearProfit: '$643,242',
        thisYearProfit: '500,332',
      },
      {
        brand: 'LG',
        lastYearSale: '52%',
        thisYearSale: ' 65%',
        lastYearProfit: '$421,132',
        thisYearProfit: '$150,005',
      },
      {
        brand: 'Sharp',
        lastYearSale: '82%',
        thisYearSale: '12%',
        lastYearProfit: '$131,211',
        thisYearProfit: '$100,214',
      },
      {
        brand: 'Panasonic',
        lastYearSale: '44%',
        thisYearSale: '45%',
        lastYearProfit: '$66,442',
        thisYearProfit: '$53,322',
      },
      {
        brand: 'HTC',
        lastYearSale: '90%',
        thisYearSale: '56%',
        lastYearProfit: '$765,442',
        thisYearProfit: '$296,232',
      },
      {
        brand: 'Toshiba',
        lastYearSale: '75%',
        thisYearSale: '54%',
        lastYearProfit: '$21,212',
        thisYearProfit: '$12,533',
      },
    ];
  }
}
