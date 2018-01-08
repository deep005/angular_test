import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    OrganizationProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
