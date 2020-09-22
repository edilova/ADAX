import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-similar-ads',
  templateUrl: './similar-ads.component.html',
  styleUrls: ['./similar-ads.component.scss']
})
export class SimilarAdsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openAd(id): void {
    window.scroll(0, 0);
    this.router.navigate(['/product/' + id ]);
  }
}
