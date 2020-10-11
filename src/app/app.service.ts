import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './interfaces/Profile';
import {map} from 'rxjs/operators';
import {Ads} from './interfaces/Ads';

const url = 'http://adaxkz.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public userInfo;
  public userId;
  public businessCategory = '';
  public businessRegion = '';
  public minPrice = '';
  public maxPrice = '';
  public businessType = '';
  public ordering = '';
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
  setBusinessCategory(item): any {
    this.businessCategory = item;
    console.log('setBusinessCategory', this.businessCategory);
  }
  setBusinessRegion(item): any {
    this.businessRegion = item;
    console.log('setBusinessRegion', this.businessRegion);
  }
  setMinPrice(item): any {
    this.minPrice = item;
    console.log('setMinPrice', this.minPrice);
  }
  setMaxPrice(item): any {
    this.maxPrice = item;
    console.log('setMaxPrice', this.maxPrice);
  }
  setBusinessType(item): any {
    this.businessType = item;
    console.log('setBusinessType', this.businessType);
  }
  setOrdering(item): any {
    this.ordering = item;
    console.log('ordering', this.ordering);
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
  getAdsList(): Observable<Observable<Ads>> {
    return this.httpClient.get<Observable<any>>(url + '/profile/GetListOfAds/' + '?business__category=' + this.businessCategory + '&business__region=' + this.businessRegion + '&min_price=' + this.minPrice + '&max_price=' + this.maxPrice + '&business__type=' + this.businessType + '&ordering=' + this.ordering).pipe(
      map((response: any) => {
        return response.results;
      })
    );
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
