import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PersonalAccountComponent} from './personal-account/personal-account.component';
import {ChatComponent} from './personal-account/chat/chat.component';
import {AlertComponent} from './personal-account/alert/alert.component';
import {SettingOrProject} from '@angular/cli/commands/analytics';
import {SettingsComponent} from './personal-account/settings/settings.component';
import {MyNewsComponent} from './personal-account/my-news/my-news.component';
import {CreateBusinessComponent} from './create-business/create-business.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent},
  { path: 'create-business', component: CreateBusinessComponent},
  { path: 'product/:id', component: ProductComponent},
  {
    path: 'personal-account',
    component: PersonalAccountComponent,
    children: [
      {
        path: 'my-news',
        component: MyNewsComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'alert',
        component: AlertComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
