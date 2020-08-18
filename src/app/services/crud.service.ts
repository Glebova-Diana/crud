import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface tableData {
  id?: number;
  name: string;
  foundationDate: string;
  founder: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl = 'http://mybackend.com/api/';
  departmentUrl = 'department';

  constructor(private http: HttpClient) {
  }

  fetchTableData(): Observable<tableData> {
    return this.http.get<tableData>(this.baseUrl + this.departmentUrl);
  }
//
// // Gets all tasks
//   getTasks() {
//     return this.http
//       .get(this.baseUrl + this.tasksEndpoint)
//       .map(res => res.json());
//   } // getTasks
// // Creates a task
//   createTask(task) {
//     return this.http
//       .post(this.baseUrl + this.tasksEndpoint, task)
//       .map(res => res.json());
//   } // createTask
// // Updates a Task
//   updateTask(update) {
//     return this.http
//       .put(this.baseUrl + this.tasksEndpoint, update)
//       .pipe(
//         map(res => res.json())
//       );
//   } // updateTask
// // Deletes a Task
//   deleteTask(taskId) {
//     return this.http
//       .delete(`${this.baseUrl + this.tasksEndpoint}/${taskId}`)
//       .map(res => res.json());
//   } // deleteTask
}
