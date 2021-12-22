import { Component, OnInit } from '@angular/core';
import { ListApiService } from 'src/app/shared/services/list-api.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

  personagens: Array<any> = [];

  constructor(private ListApiService: ListApiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList()
  {
    this.ListApiService.getlist().subscribe(resultado =>
      {
        this.personagens = resultado?.results;
        console.log(this.personagens);
      })
  }
}
