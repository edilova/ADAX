import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './interfaces/Profile';
import {map} from 'rxjs/operators';

const url = 'http://adax-kz.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public userInfo;
  public userId;
  private url = 'http://adax-kz.herokuapp.com';

  constructor( private httpClient: HttpClient) { }

  login(data): Observable<Observable<Profile>>{
    this.userInfo = this.httpClient.post<Observable<any>>(url + '/login', data);
    this.userId = this.userInfo.id;
    console.log(this.userId)
    return this.userInfo;
  }
  setId(id): any {
    this.userId = id;
  }
  createUser(info): Observable<Observable<Profile>> {
    return this.httpClient.post<Observable<any>>(url + '/auth/users/', info);
  }
  registrUser(username, user): Observable<Observable<Profile>> {
    return this.httpClient.post<Observable<any>>(url + '/profile/Profile/', {username, user});
  }
  getProfile(): Observable<Observable<Profile>> {
    return this.httpClient.get<Observable<any>>(url + '/profile/Profile/' + this.userId);
  }
  getNotifications(): Observable<Observable<Profile>> {
    return this.httpClient.get<Observable<any>>(url + '/profile/GetNotification/');
  }
  getCity(): Observable<any> {
    return this.httpClient.get<Observable<any>>(url + '/city/City/').pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }
  getCategory(): Observable<any> {
    return this.httpClient.get<Observable<any>>(url + '/business/Category/').pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }
  createBusiness(info): Observable<Observable<Profile>> {
    return this.httpClient.post<Observable<any>>(url + '/business/Business/', info)
      .pipe(
        map ((res) => {
          console.log('res submit', res)
          return res;
        })
      );
  }
  createFranchise(info): Observable<Observable<Profile>> {
    return this.httpClient.post<Observable<any>>(url + '/franchise/Franchise/', info)
      .pipe(
        map ((res) => {
          console.log('res submit franchise', res)
          return res;
        })
      );
  }
}
