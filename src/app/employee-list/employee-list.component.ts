import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {DepartmentService} from '../services/department.service';
import {Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['name'];
  public dataSource = [];

  constructor(
    private crudService: DepartmentService,
    private employeeService: EmployeeService,
    protected readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.fetchTableData();
    this.employeeService.getEmployees().subscribe(
      data => {
        console.log('employees', data);
      }
    );
    this.employeeService.getEmployee(0).subscribe(
      data => {
        console.log('1 employee', data);
      }
    );
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

  redirectToEmployee(id: number) {
    this.router.navigateByUrl(`employee/${id}`);
  }
}
