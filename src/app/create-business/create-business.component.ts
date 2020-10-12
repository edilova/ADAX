import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';
import {Profile} from '../interfaces/Profile';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.scss']
})
export class CreateBusinessComponent implements OnInit {
  public pageNum = 1;
  public isCategory = false;
  public isCity = false;
  public category = '';
  public city = '';
  public file: any;
  public cityList: Observable<Profile>;
  public categoryList: Observable<Profile>;
  public createBusiness: FormGroup;
  public isOpenBorrowedFund = false;
  public isOpenCommodityRest = false;
  public urls = [];
  // public createBusiness = this.FormGroup.group({
  //   name: ['', Validators.required],
  //   price:  new FormControl(''),
  //   years_on_the_market:  new FormControl(''),
  //   revenue:  new FormControl(''),
  //   profit:  new FormControl(''),
  //   expenses:  new FormControl(''),
  //   share_of_sale:  new FormControl(''),
  //   borrowed_funds:  new FormControl(''),
  //   commodity_rest:  new FormControl(''),
  //   estimated_payback:  new FormControl(''),
  //   num_of_personal:  new FormControl(''),
  //   production_means:  new FormControl(''),
  //   term_of_the_lease:  new FormControl(''),
  //   extend_the_lease:  new FormControl(''),
  //   contact_name:  new FormControl(''),
  //   phone:  new FormControl(''),
  //   email:  new FormControl(''),
  //   comment:  new FormControl(''),
  //   category:  new FormControl(''),
  //   region:  new FormControl(''),
  //   building:  new FormControl(''),
  // });

  constructor( private appService: AppService, private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.createBusiness = this.formBuilder.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        years_on_the_market: ['', Validators.required],
        revenue:  ['', Validators.required],
        profit:  ['', Validators.required],
        expenses:  ['', Validators.required],
        share_of_sale:  ['', Validators.required],
        borrowed_funds:  ['', Validators.required],
        commodity_rest:  ['', Validators.required],
        estimated_payback:  ['', Validators.required],
        num_of_personal:  ['', Validators.required],
        production_means:  ['', Validators.required],
        term_of_the_lease:  [''],
        extend_the_lease:  ['', Validators.required],
        building_description:  [''],
        contact_name:  ['', Validators.required],
        phone:  ['', Validators.required],
        email:  ['', Validators.required],
        comment:  ['', Validators.required],
        category:  ['', Validators.required],
        region:  ['', Validators.required],
        building:  ['', Validators.required],
        type:  1,
      });
    this.appService.getCategory()
      .subscribe(m => {
          console.log('getCategory', m);
          this.categoryList = m;
        },
        error => {
          console.log('err', error);
        });
    this.appService.getCity()
      .subscribe(m => {
          console.log('getCity', m);
          this.cityList = m;
        },
        error => {
          console.log('err', error);
        });
  }
  setPage(num): void {
    this.pageNum = num;
  }
  openCategory(): void {
    this.isCategory = !this.isCategory;
    this.isCity = false;
  }
  setCategory(item): void {
    this.category = item.name;
    this.isCategory = false;
    // this.createBusiness.setValue({
    //   category: item.id
    // })
    console.log('category', this.createBusiness.value);

  }
  openCity(): void {
    this.isCity = !this.isCity;
    this.isCategory = false;
  }
  setCity(item): void {
    this.city = item.name;
    this.isCity = false;
  }
  updated(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    } else if (file === undefined) {
      this.file = null;
    }
  }
  private handleReaderLoaded(e: any): void {
    this.file = 'data:image/jpeg;base64,' + btoa(e.target.result);
  }
  setBuildings(item): void {
    this.createBusiness.controls.building.setValue(item);
  }
  setAcceptance(item): void {
    this.createBusiness.controls.extend_the_lease.setValue(item);
  }
  submit(): void {
    console.log('submit', this.createBusiness.value);
    this.appService.createBusiness(this.createBusiness.value).subscribe(
      e => {
        console.log('submit success');
        this.router.navigate(['/main']);
      },
      err => {
        console.log('error', err);
      }
    );
  }
  changePlus(item): void {
    if (item === 'borrowed_funds') {
      this.isOpenBorrowedFund = !this.isOpenBorrowedFund;
    }
    if (item === 'commodity_rest') {
      this.isOpenCommodityRest = !this.isOpenCommodityRest;
    }
  }
  selectFiles(event): void {
    if (event.target.files) {
      for (let i = 0; i < File.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
          console.log('photos', this.urls)
        };
      }
    }
  }
}
