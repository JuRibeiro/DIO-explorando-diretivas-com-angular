import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0;
  nome = 'Juliana Brito Favero Ribeiro';
  text = '';

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0,
    }
  ];

  constructor(private peopleService: PeopleService)
  {
    /* assinatura */
  }
  ngOnInit() {
    console.log(this.pessoas);

    let intervalo = setInterval(()=>
    {
      this.count++;
      if(this.count === 10)
      {
        clearInterval(intervalo);
      }
    }, 1000)

    this.getPeople();
  }

  clicou (nome: string): void
  {
    console.log('clicou aqui ', nome)
  }

  getPeople()
  {
    this.peopleService.getpeople().subscribe(people  =>
      {
        this.pessoas = people;
      })
  }
}

/* Ciclo de vida angular

Constructor
ngOnChange *
ngOnInit
ngDoCheck *
ngAfterContentInit
ngAfterContentChecked *
ngAfterViewInit
ngAfterViewChecked *
ngOnDestroy (limpar uma chamada)
 */