import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SimilarAdsComponent } from './component/similar-ads/similar-ads.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { ChatComponent } from './personal-account/chat/chat.component';
import { AlertComponent } from './personal-account/alert/alert.component';
import { SettingsComponent } from './personal-account/settings/settings.component';
import { MyNewsComponent } from './personal-account/my-news/my-news.component';
import { FiltersComponent } from './component/filters/filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateBusinessComponent } from './create-business/create-business.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ProductComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SimilarAdsComponent,
    PersonalAccountComponent,
    ChatComponent,
    AlertComponent,
    SettingsComponent,
    MyNewsComponent,
    FiltersComponent,
    CreateBusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
