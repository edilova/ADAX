import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public createAdBtn = false;

  constructor() { }

  ngOnInit(): void {
  }

  public createAd(): void {
    this.createAdBtn = !this.createAdBtn;
  }

  public setAdType(type): void {
  }

}
