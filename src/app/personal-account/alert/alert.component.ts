import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  public data;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getNotifications()
      .subscribe(m => {
          // console.log('notifications m', m);
          this.data = m;
          console.log('notifications m', this.data.results);
        },
        error => {
          console.log('err', error);
        });
  }

}
