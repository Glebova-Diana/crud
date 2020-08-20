import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {DepartmentService} from '../services/department.service';
import {Router} from '@angular/router';

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
    protected readonly router: Router
    ) {
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

  redirectToEmployee(id: number) {
    this.router.navigateByUrl(`employee/${id}`);
  }
}
