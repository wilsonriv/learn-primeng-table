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
  }
}
