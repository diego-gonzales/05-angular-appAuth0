import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule.forRoot({
      domain: 'dev-x8k0lkbh.us.auth0.com',
      clientId: 'CE8kxzyU1ASEkm0YOZVxkTEGDBn7F14h'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
