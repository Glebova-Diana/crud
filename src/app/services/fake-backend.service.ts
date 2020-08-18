import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class FakeBackendService implements InMemoryDbService {
  createDb() {
    let department = [
      {
        id: 1,
        name: 'Department 1',
        foundationDate: '25 jan 20',
        founder: 'Tanner Cooper'
      },
      {
        id: 2,
        name: 'Department 2',
        foundationDate: '22 jan 18',
        founder: 'Jonathan Jenkins'
      },
      {
        id: 3,
        name: 'Department 3',
        foundationDate: '14 feb 18',
        founder: 'Dax Gray'
      },
      {
        id: 4,
        name: 'Department 4',
        foundationDate: '20 jul 19',
        founder: 'Irving Reed'
      }
    ];
    return {department};
  }
}
