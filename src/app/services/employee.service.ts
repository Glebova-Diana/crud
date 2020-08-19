import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface TableData {
  id?: number;
  // name: string;
  // foundationDate: string;
  // founder: string;
  // employeesNumbers: number;
  employees: [
    {
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
  url = `${environment.baseUrl}/department`;

  constructor(private http: HttpClient) {
  }

  fetchTableData(): Observable<TableData> {
    return this.http.get<TableData>(this.url) as Observable<TableData>;
  }

  addTableData(newData): Observable<TableData> {
    console.log('newData', newData);
    return this.http.post(this.url, newData) as Observable<TableData>;
  }
}
