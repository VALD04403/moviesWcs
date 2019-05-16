import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  constructor(private http: HttpClient) { }
  
  getMovie(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/movie`);
  }
  
  getOrdermovie(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/movieYear`);
  }
  
  getOrdermovie2(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/movieYear2`);
  }
  
  getResult(body) {
    return this.http.get<any>(`${environment.apiUrl}/search`, body);
  }

  get00(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/movie00`);
  }

  get80(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/movie80`);
  }

  get90(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/movie90`);
  }

  getTarantino(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/tarantino`);
  }
  
}
