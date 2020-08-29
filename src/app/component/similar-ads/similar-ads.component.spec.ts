import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarAdsComponent } from './similar-ads.component';

describe('SimilarAdsComponent', () => {
  let component: SimilarAdsComponent;
  let fixture: ComponentFixture<SimilarAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
