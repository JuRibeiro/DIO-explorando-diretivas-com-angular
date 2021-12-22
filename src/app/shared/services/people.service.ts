import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/* injectable permitindo que este service seja utilizado em toda aplicação */
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getpeople(): Observable<any>
  {
    let peopleArray = 
    [
      {
        firstName: 'Juliana',
        lastName: 'Ribeiro',
        age: 23,
      },
      {
        firstName: 'Julia',
        lastName: 'Brito',
        age: 24,
      },
      {
        firstName: 'Ana Julia',
        lastName: 'Favero',
        age: 25,
      },
      {
        firstName: 'Ana',
        lastName: 'Brivero',
        age: 26,
      },
    ]

    return of(peopleArray)
  }
}

/* of retorna um observable de valor unico */
