import { NgModule } from '@angular/core';
// **** extracted and moved to shared module for reusablity and to avoid duplication******** ///
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { RouterModule} from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    // **** extracted and moved to shared module for reusablity and to avoid duplication**** ///
    //FormsModule,
    //RouterModule,
    //CommonModule,
    HeroesRoutingModule,
    SharedModule
  ],
  //exports: [ RouterModule ]
})
export class HeroesModule { }
