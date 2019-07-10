import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// ***** extracted to feature-router module*****
//import { HeroesComponent } from './heroes/heroes.component';
//import { HeroDetailComponent } from './hero-detail/hero-detail.component';
/****************** */

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // ***** extracted to feature-router module*****
    //{ path: 'heroes', component: HeroesComponent },
    //{ path: 'detail/:id', component: HeroDetailComponent },
    { path: 'dashboard', component: DashboardComponent},

    //lazyloading of heroes module
    { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule'}, 
    //******/
    { path: '**', component: PageNotFoundComponent}
  ];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
