import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FakeBackendService} from '../services/fake-backend.service';
import {CrudService} from '../services/crud.service';

@Component({
  selector: 'app-department-new',
  templateUrl: './department-new.component.html',
  styleUrls: ['./department-new.component.css']
})
export class DepartmentNewComponent implements OnInit {
  newDepartmentForm: FormGroup;

  constructor(private crudServise: CrudService) { }

  ngOnInit(): void {
    this.newDepartmentForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      foundationDate: new FormControl('', Validators.required),
      founder: new FormControl('', Validators.required),
      employeesNumbers: new FormControl('', Validators.required),
    });

    // this.crudServise.addTableData({
    //   id: this.newDepartmentForm.controls.id.value,
    //   name: this.newDepartmentForm.controls.name.value,
    //   foundationDate: this.newDepartmentForm.controls.foundationDate.value,
    //   founder: this.newDepartmentForm.controls.founder.value,
    //   employeesNumbers: this.newDepartmentForm.controls.employeesNumbers.value
    // })
    //   .subscribe(
    //     // this
    //   );
  }

  addDepartment() {
    console.log()
  }
}
