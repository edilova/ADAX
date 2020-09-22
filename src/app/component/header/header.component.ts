import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public createAdBtn = false;

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  public createAd(): void {
    this.createAdBtn = !this.createAdBtn;
  }

  public setAdType(type): void {
    if (type === 'create-business') {
      this.router.navigate(['/create-business']);
    }
    if (type === 'create-franchise') {
      this.router.navigate(['/create-franchise']);
    }
    this.createAdBtn = false;
  }

}
