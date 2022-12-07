import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicHomeComponent } from './public-home/public-home.component';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
    { path: '',
      component: PublicHomeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        MatSidenavModule],
    exports: [RouterModule]
})
export class PublicRoutingModule {}