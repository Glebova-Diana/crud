import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-department-new',
  templateUrl: './department-new.component.html',
  styleUrls: ['./department-new.component.css']
})
export class DepartmentNewComponent implements OnInit {
  newDepartmentForm: FormGroup;

  constructor(private crudServise: DepartmentService) {
  }

  ngOnInit(): void {
    this.newDepartmentForm = new FormGroup({
      // id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      foundationDate: new FormControl('', Validators.required),
      founder: new FormControl('', Validators.required),
      employeesNumbers: new FormControl('', Validators.required),
    });


    this.crudServise.fetchTableData().subscribe(
      data => {
        console.log('data fetch', data);
      }
    );
  }

  addDepartment() {
    this.crudServise.addTableData(
      this.newDepartmentForm.value
    )
      .subscribe(
        data => {
          console.log('resp data', data);
        },
        error => {
          console.log('error', error);
        }
      );
  }
}
