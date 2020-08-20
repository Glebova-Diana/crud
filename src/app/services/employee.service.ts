import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface EmployeeTableData {
  id?: number;
  employees: [
    {
      id?: number,
      name: string;
      post: string;
      age: number;
    }
    ];
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {
  }

  fetchTableData(): Observable<EmployeeTableData> {
    return this.http.get<EmployeeTableData>(`${this.url}/department`) as Observable<EmployeeTableData>;
  }

  getEmployees() {
    return this.http.get(`${this.url}/employees`);
  }

  getEmployee(id: number) {
    return this.http.get(`${this.url}/employees/${id}`) as Observable<any>;
  }

  getEmployeeDepartment(departmentId: number) {
    return this.http.get(`${this.url}/department/${departmentId}`);
  }

  addTableData(newData): Observable<EmployeeTableData> {
    console.log('newData', newData);
    return this.http.post(this.url, newData) as Observable<EmployeeTableData>;
  }
}
