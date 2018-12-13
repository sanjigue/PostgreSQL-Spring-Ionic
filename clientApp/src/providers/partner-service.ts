import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PartnerService {
  url = 'http://localhost:8090/partner';
  constructor(public http: HttpClient) {
  }



  getAllPartners(): Observable<any> {
    return this.http.get(this.url + 's');
  }

  get(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  remove(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  add(partner: any){
    return this.http.post(this.url, partner);
  }

  update(partner: any, partnerId: number): Observable<any> {
    return this.http.put(this.url + '/' + partnerId, partner);
  }
  
}