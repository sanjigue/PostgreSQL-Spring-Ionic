import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {
  url = 'http://localhost:8090/user';
  constructor(public http: HttpClient) {
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.url + 's');
  }

  get(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  remove(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  add(user: any){
    return this.http.post(this.url, user);
  }
}