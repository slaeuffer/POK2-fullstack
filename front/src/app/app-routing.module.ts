import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'orga',
        loadChildren: () => import('./organizer-dashboard/organizer-dashboard.module').then(mod => mod.OrganizerDashboardModule)
      },
      {
        path: 'public',
        loadChildren: () => import('./public/public.module').then(mod => mod.PublicModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
