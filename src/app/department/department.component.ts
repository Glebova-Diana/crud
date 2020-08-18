import { Component, OnInit } from '@angular/core';
import {CrudService} from '../services/crud.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'foundationDate', 'founder'];
  dataSource;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.fetchTableData();
  }

  fetchTableData() {
    this.crudService.fetchTableData()
      .subscribe(response => {
        this.dataSource = response;
        console.log('response', response);
        console.log('dataSource', this.dataSource);
      });
  }
}
