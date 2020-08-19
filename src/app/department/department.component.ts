import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DepartmentService} from '../services/department.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'foundationDate', 'founder'];
  dataSource;

  constructor(private crudService: DepartmentService) {}

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
}
