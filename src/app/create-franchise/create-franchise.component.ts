import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Profile} from '../interfaces/Profile';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-franchise',
  templateUrl: './create-franchise.component.html',
  styleUrls: ['./create-franchise.component.scss']
})
export class CreateFranchiseComponent implements OnInit {
  public pageNum = 1;
  public isCategory = false;
  public isCity = false;
  public category = '';
  public city = '';
  public file: any;
  public cityList: Observable<Profile>;
  public categoryList: Observable<Profile>;
  public createFranchise: FormGroup;
  // public createFranchise = this.formBuilder.group({
  //   name: ['', Validators.required],
  //   company_foundation:  ['', Validators.required],
  //   franchise_program_start:  new FormControl(''),
  //   num_of_franchise_businesses:  new FormControl(''),
  //   num_of_own_enterprises:  new FormControl(''),
  //   launch_costs:  new FormControl(''),
  //   entrance_fee:  new FormControl(''),
  //   comment_entrance_fee:  new FormControl(''),
  //   royalty:  new FormControl(''),
  //   comment_royalty:  new FormControl(''),
  //   other_current_payments:  new FormControl(''),
  //   training:  new FormControl(''),
  //   brief_description:  new FormControl(''),
  //   package:  new FormControl(''),
  //   requirements_franchise:  new FormControl(''),
  //   requirements_representation:  new FormControl(''),
  //   contact_name:  new FormControl(''),
  //   phone:  new FormControl(''),
  //   email:  new FormControl(''),
  //   comment:  new FormControl(''),
  //   category:  new FormControl(''),
  //   price:  new FormControl(''),
  //   city:  new FormControl('')
  // });

  constructor( private appService: AppService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createFranchise = this.formBuilder.group({
      name: ['', Validators.required],
      company_foundation:  ['', Validators.required],
      franchise_program_start:  ['', Validators.required],
      num_of_franchise_businesses:  ['', Validators.required],
      num_of_own_enterprises:  ['', Validators.required],
      launch_costs:  ['', Validators.required],
      entrance_fee:  ['', Validators.required],
      comment_entrance_fee:  ['', Validators.required],
      royalty:  ['', Validators.required],
      comment_royalty:  ['', Validators.required],
      other_current_payments:  ['', Validators.required],
      training:  ['', Validators.required],
      brief_description:  ['', Validators.required],
      package:  ['', Validators.required],
      requirements_franchise:  ['', Validators.required],
      requirements_representation:  ['', Validators.required],
      contact_name:  ['', Validators.required],
      phone:  ['', Validators.required],
      email:  ['', Validators.required],
      comment:  ['', Validators.required],
      category:  ['', Validators.required],
      price:  ['', Validators.required],
      region: ['', Validators.required],
      type: 2
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
    console.log('category', this.createFranchise.value);

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
    this.createFranchise.controls.building.setValue(item);
  }
  setAcceptance(item): void {
    this.createFranchise.controls.extend_the_lease.setValue(item);
  }
  submit(): void {
    console.log('submit', this.createFranchise.value);
    this.appService.createFranchise(this.createFranchise.value).subscribe(
      e => {
        console.log('submit success');
        this.router.navigate(['/main']);
      },
      err => {
        console.log('error', err);
      }
    )
  }

}
