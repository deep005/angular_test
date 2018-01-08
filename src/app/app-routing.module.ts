import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsComponent } from './analytics/analytics.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'organization-profile',
    pathMatch: 'full'
  },

  {
    path: "organization-profile",
    component: OrganizationProfileComponent
  },
  {
    path: "analytics",
    component: AnalyticsComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
