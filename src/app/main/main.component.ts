import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data;
  public minPrice;
  public maxPrice;
  public city = 'Город';
  public isCity = false;
  public sort = 'Сортировать';
  public isSort = false;
  public type = 'Тип объявления';
  public isType = false;
  public category = 'Категория';
  public isCategory = false;
  public cities;
  public categories;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getCity()
      .subscribe(m => {
          this.cities = m;
          console.log('city m', m);
        },
        error => {
          console.log('err', error);
        });
    this.appService.getCategory()
      .subscribe(m => {
          this.categories = m;
          console.log('category m', m);
        },
        error => {
          console.log('err', error);
        });
    this.appService.getAdsList()
      .subscribe(m => {
        this.data = m;
        console.log('res', m);
      },
        error => {
        console.log('err', error);
        });
  }

  openAd(id): void {
    this.router.navigate(['/product/' + id ]);
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
    this.appService.setBusinessRegion(item.id);
    this.appService.getAdsList()
      .subscribe(m => {
          this.data = m;
          console.log('res', m);
        },
        error => {
          console.log('err', error);
        });
  }
  public openSort(): void {
    this.isSort = !this.isSort;
    this.isCity = false;
    this.isType = false;
    this.isCategory = false;
    console.log(this.isSort);
  }
  public setSort(item): void {
    if (item === 'business__date') {
      this.sort = 'По дате добавления';
    }
    if (item === 'business__views') {
      this.sort = 'По популярности';
    }
    if (item === 'business__price') {
      this.sort = 'От дешевых к дорогим';
    }
    if (item === '-business__price') {
      this.sort = 'От дорогих к дешевым';
    }


    this.isSort = false;
    console.log('sort', item)
    console.log('sort', this.sort)
    this.appService.setOrdering(this.sort);
    this.appService.getAdsList()
      .subscribe(m => {
          this.data = m;
          console.log('res', m);
        },
        error => {
          console.log('err', error);
        });
  }
  public openType(): void {
    this.isType = !this.isType;
    this.isSort = false;
    this.isCity = false;
    this.isCategory = false;
    console.log(this.isType);
  }
  public setType(item): void {
    if (item === 1) {
      this.type = 'Продажа бизнеса';
    } else {
      this.type = 'Продажа франшизы';
    }

    this.isType = false;
    this.appService.setBusinessType(item);
    this.appService.getAdsList()
      .subscribe(m => {
          this.data = m;
          console.log('res', m);
        },
        error => {
          console.log('err', error);
        });
  }
  public openCategory(): void {
    this.isCategory = !this.isCategory;
    this.isSort = false;
    this.isType = false;
    this.isCity = false;
    console.log(this.isCategory);
  }
  public setMinPrice(item): void {
    console.log('minPrice', item)
    this.appService.setMinPrice(this.minPrice);
    this.appService.getAdsList()
      .subscribe(m => {
          this.data = m;
          console.log('res', m);
        },
        error => {
          console.log('err', error);
        });
  }
  public setMaxPrice(item): void {
    console.log('maxPrice', item)
    this.appService.setMaxPrice(this.maxPrice);
    this.appService.getAdsList()
      .subscribe(m => {
          this.data = m;
          console.log('res', m);
        },
        error => {
          console.log('err', error);
        });
  }
  public setCategory(item): void {
    this.category = item.name;
    this.isCategory = false;
    console.log('set category', item)
    this.appService.setBusinessCategory(item.id);
    this.appService.getAdsList()
      .subscribe(m => {
          this.data = m;
          console.log('res', m);
        },
        error => {
          console.log('err', error);
        });
  }

}
