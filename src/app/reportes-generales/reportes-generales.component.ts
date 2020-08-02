import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes-generales',
  templateUrl: './reportes-generales.component.html',
  styleUrls: ['./reportes-generales.component.scss']
})
export class ReportesGeneralesComponent implements OnInit {

  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];

  constructor() { }

  ngOnInit(): void {
  }

}
