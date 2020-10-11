import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public city = 'Город';
  public isCity = false;
  public sort = 'Сортировать';
  public isSort = false;
  public type = 'Тип объявления';
  public isType = false;
  public category = 'Категория';
  public isCategory = false;
  public cities;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getCity()
      .subscribe(m => {
          this.cities = m;
          console.log('city m', m);
        },
        error => {
          console.log('err', error);
        });
  }

  public openCity(): void {
    this.isCity = !this.isCity;
    this.isSort = false;
    this.isType = false;
    this.isCategory = false;
    console.log(this.isCity);
  }
  public setCity(item): void {
    this.city = item.name;
    this.isCity = false;
    this.appService.setId(item.id);
  }
  public openSort(): void {
    this.isSort = !this.isSort;
    this.isCity = false;
    this.isType = false;
    this.isCategory = false;
    console.log(this.isSort);
  }
  public setSort(item): void {
    this.sort = item;
    this.isSort = false;
  }
  public openType(): void {
    this.isType = !this.isType;
    this.isSort = false;
    this.isCity = false;
    this.isCategory = false;
    console.log(this.isType);
  }
  public setType(item): void {
    this.type = item;
    this.isType = false;
  }
  public openCategory(): void {
    this.isCategory = !this.isCategory;
    this.isSort = false;
    this.isType = false;
    this.isCity = false;
    console.log(this.isCategory);
  }
  public setCategory(item): void {
    this.category = item;
    this.isCategory = false;
  }
}
