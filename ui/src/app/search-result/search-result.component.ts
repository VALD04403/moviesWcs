import { Component, OnInit } from '@angular/core';
import { FilmService } from '../common/film.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  results: any[];

  constructor(private service: FilmService) { }

  ngOnInit() {
  }

}
