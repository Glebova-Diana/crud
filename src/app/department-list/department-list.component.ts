import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DepartmentService} from '../services/department.service';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'foundationDate', 'founder'];
  dataSource;

  constructor(
    private crudService: DepartmentService,
    protected readonly router: Router
    ) {}

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

  ngAfterViewInit(): void {
      // this.dataSource.paginator = this.paginator;
  }

  redirectToDeprtment(element) {
    this.router.navigateByUrl(`/department/${element}`);
  }
}
