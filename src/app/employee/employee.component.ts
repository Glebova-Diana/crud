import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'post', 'age'];
  public dataSource = [];

  constructor(private crudService: DepartmentService) {
  }

  ngOnInit(): void {
    this.fetchTableData();
  }

  fetchTableData() {
    this.crudService.fetchTableData()
      .subscribe(response => {
        this.dataSource = response.map(department => department.employees).flat();
        console.log('dataSource', this.dataSource);
      });
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }
}
