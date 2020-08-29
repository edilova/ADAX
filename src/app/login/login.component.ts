import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public tabName = 'signIn';

  constructor() { }

  ngOnInit(): void {
  }

  activeTab(tab): void {
    this.tabName = tab;
  }
}
