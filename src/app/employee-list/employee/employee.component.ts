import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'post', 'age'];
  dataSource = [];
  currentId: number;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.currentId = Number(document.location.pathname.split('/employee/')[1]);
    this.fetchDataTable();
  }

  fetchDataTable() {
    this.employeeService.fetchTableData()
      .subscribe(employee => {
          this.dataSource = [employee];
          console.log('currentId', this.currentId);
          console.log('employee', employee);
          console.log('employee[this.currentId - 1]', employee[this.currentId - 1]);
          console.log(employee[this.currentId - 1]);
        }
      );
  }
}
