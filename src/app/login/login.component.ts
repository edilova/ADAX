import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public tabName = 'signIn';
  public list: any;
  public id;
  public msg;
  public msgError;
  public registr = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password:  new FormControl(''),
  });
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password:  new FormControl(''),
  });

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    // this.list = this.appService.getList();
  }

  activeTab(tab): void {
    this.tabName = tab;
  }
  login(): any {
    console.log('this.loginForm.value', this.loginForm.value)
    this.appService.login(this.loginForm.value)
      .subscribe(m => {
          console.log('login m', m);
          this.list = m;
          this.appService.setId(this.list.id)
          this.router.navigateByUrl('main');
        },
        error => {
          console.log('err', error);
          this.msg = error;
        });
  }
  createUser(): any {
    this.appService.createUser(this.registr.value)
      .subscribe(data => {
        // this.id = data.id;
        console.log('data', data);
        this.list = data;
        this.appService.registrUser(this.registr.value.username, this.list.id)
          .subscribe(m => {
            console.log('m', m);
            this.msg = 'Пользователь успешно создан';
            setTimeout(() => {
                this.msg = null;
              }, 7000);

          },
            error => {
              console.log('err', error);
              this.msg = error;
            });
      },
        error => {
          console.log('err', error);
          this.msgError = error.error.username;
          setTimeout(() => {
            this.msgError = null;
          }, 7000);
        });
    console.log('hi', this.registr.value);
  }
}
