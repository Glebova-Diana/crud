import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

export interface DepartmentTableData {
  id?: number;
  name: string;
  foundationDate: string;
  founder: string;
  employeesNumbers: number;
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
export class DepartmentService {
  url = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {
  }

  fetchTableData(): Observable<any> {
    return this.http.get<DepartmentTableData[]>(`${this.url}/department`) as Observable<DepartmentTableData[]>;
  }

  getDepartments() {
    return this.http.get(`${this.url}/departments`) as Observable<any>;
  }

  getDepartment(id: number) {
    return this.http.get(`${this.url}/departments/${id}`);
  }

  getDepartmentEmployees(id: number) {
    return this.http.get(`${this.url}/employees?departmentId=${id}`) as Observable<any>;
  }

  addTableData(newData): Observable<DepartmentTableData> {
    console.log('newData', newData);
    return this.http.post(this.url, newData) as Observable<DepartmentTableData>;
  }
}
