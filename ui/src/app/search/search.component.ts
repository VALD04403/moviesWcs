import { Component, OnInit } from '@angular/core';
import { FilmService } from '../common/film.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchForm: FormGroup;
  
  constructor(private service: FilmService, private router: Router, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.searchForm = this.fb.group({
      input: ['']
    })
  }
  
  search() {
    this.service.getResult(this.searchForm.value.input);
    this.router.navigate(['/search']);
  }
}