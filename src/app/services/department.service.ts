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
  url = `${environment.baseUrl}/department`;

  constructor(private http: HttpClient) {
  }

  fetchTableData(): Observable<any> {
    return this.http.get<DepartmentTableData[]>(this.url) as Observable<DepartmentTableData[]>;
  }

  addTableData(newData): Observable<DepartmentTableData> {
    console.log('newData', newData);
    return this.http.post(this.url, newData) as Observable<DepartmentTableData>;
  }
}
