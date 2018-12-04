import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CountryService {
  url = 'http://localhost:8090/country';
  urlForAll = 'http://localhost:8090/countries';
  constructor(public http: HttpClient) {
  }

  getAllCountries(): Observable<any> {
    return this.http.get(this.urlForAll);
  }

  get(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  remove(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  add(country: any){
    return this.http.post(this.url, country);
  }
}