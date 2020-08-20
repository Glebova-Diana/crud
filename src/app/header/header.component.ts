import {Component, OnInit} from '@angular/core';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isDepartment: boolean;

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.fetchTableData();
  }

  fetchTableData() {
    this.departmentService.fetchTableData()
      .subscribe(
        department => {
          this.isDepartment = department.length !== 0;
        }
      );
  }
}
