import { Component, OnInit } from '@angular/core';

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
      nome: "Juliana",
      sobrenome: "Ribeiro"
    },
    {
      nome: "Ana Julia",
      sobrenome: "Favero"
    },
    {
      nome: "Julia",
      sobrenome: "Brito"
    },
    {
      nome: "Julia",
      sobrenome: "Costa"
    }
  ];

  constructor()
  {

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
  }

  clicou (nome: string): void
  {
    console.log('clicou aqui ', nome)
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