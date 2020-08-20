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
        founder: 'Tanner Cooper',
        employeesNumbers: 6,
        employees: [
          {
            id: 10,
            name: 'Ayda Shaffer',
            post: 'Developer',
            age: 20
          },
          {
            id: 11,
            name: 'Iqra Adkins',
            post: 'Developer',
            age: 25
          },
          {
            id: 12,
            name: 'Abbigail Reader',
            post: 'Developer',
            age: 40
          },
          {
            id: 13,
            name: 'Meghan Preece',
            post: 'Developer',
            age: 40
          },
          {
            id: 14,
            name: 'Dixie Morgan',
            post: 'Developer',
            age: 40
          },
          {
            id: 15,
            name: 'Andreas Adam',
            post: 'Developer',
            age: 40
          }
        ]
      },
      {
        id: 2,
        name: 'Department 2',
        foundationDate: '22 jan 18',
        founder: 'Jonathan Jenkins',
        employeesNumbers: 4,
        employees: [
          {
            id: 16,
            name: 'Uwais Livingston',
            post: 'Developer',
            age: 18
          },
          {
            id: 17,
            name: 'Momina Pearson',
            post: 'Developer',
            age: 27
          },
          {
            id: 18,
            name: 'Agnes Herman',
            post: 'Developer',
            age: 40
          },
          {
            id: 19,
            name: 'Finnley Mcfadden',
            post: 'Developer',
            age: 26
          }
        ]
      },
      {
        id: 3,
        name: 'Department 3',
        foundationDate: '14 feb 18',
        founder: 'Dax Gray',
        employeesNumbers: 2,
        employees: [
          {
            id: 20,
            name: 'Faizah Vasquez',
            post: 'Developer',
            age: 38
          },
          {
            id: 21,
            name: 'Iqra Adkins',
            post: 'Ricky Burn',
            age: 22
          }
        ]
      },
      {
        id: 4,
        name: 'Department 4',
        foundationDate: '20 jul 19',
        founder: 'Irving Reed',
        employeesNumbers: 5,
        employees: [
          {
            id: 22,
            name: 'Jonas Flynn',
            post: 'Developer',
            age: 50
          },
          {
            id: 23,
            name: 'Brittney Bright',
            post: 'Developer',
            age: 48
          },
          {
            id: 24,
            name: 'Piper Talley',
            post: 'Developer',
            age: 37
          },
          {
            id: 25,
            name: 'Talitha Oneal',
            post: 'Developer',
            age: 48
          },
          {
            id: 26,
            name: 'Ferne Rollins',
            post: 'Developer',
            age: 37
          }
        ]
      }
    ];
    return {department};
  }
}
