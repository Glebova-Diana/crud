import {Component, OnInit, ViewChild} from '@angular/core';
import {DepartmentService} from '../../services/department.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'foundationDate', 'founder', 'employeesNumbers', 'employees'];
  dataSource = [];
  currentId: number;

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.currentId = Number(document.location.pathname.split('/department/')[1]);
    this.fetchTableData();
    console.log(this.currentId);
  }

  fetchTableData() {
    this.departmentService.fetchTableData()
      .subscribe(department => {
          this.dataSource = [department[this.currentId - 1]];
          console.log(department[this.currentId - 1].employees);
        }
      );
  }
}
