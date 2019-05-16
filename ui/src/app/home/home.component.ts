import { Component, OnInit } from '@angular/core';
import { FilmService } from '../common/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  films: any[];
  
  constructor(private service: FilmService) { }
  
  ngOnInit() {
    // récupère les films
    this.service.getTarantino().subscribe( res => {
      this.films = res
    });
  }
}
