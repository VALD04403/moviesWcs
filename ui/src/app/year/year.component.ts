import { Component, OnInit } from '@angular/core';
import { FilmService } from '../common/film.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  films: any[];
  filmByOrder: boolean = false;
  filmByYear: string = '';
  searchForm: FormGroup;

  constructor(private service: FilmService, private modalService: NgbModal, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      input: ['']
    })
    //récupère les films organiser par année
    this.service.getOrdermovie().subscribe(res => {
      this.films = res
    });
  }

  toggleOrder() {
    this.filmByOrder = !this.filmByOrder;
    if (this.filmByOrder == false) {
      this.service.getOrdermovie().subscribe(res => {
        this.films = res
      });
    } else {
      this.service.getOrdermovie2().subscribe(res => {
        this.films = res
      });
    }
  }

  toggleYear(year: string) {
    this.filmByYear = year;
    this.films = [];
    if (this.filmByYear == '00') {
      this.service.get00().subscribe(res => {
        this.films = res;
      });
    } else if (this.filmByYear == '90') {
      this.service.get90().subscribe(res => {
        this.films = res;
      });
    } else if (this.filmByYear == '80') {
      this.service.get80().subscribe(res => {
        this.films = res;
      });
    }
  };

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  search() {
    this.service.getResult(this.searchForm.value.input);
    this.router.navigate(['/search']);
  }
}