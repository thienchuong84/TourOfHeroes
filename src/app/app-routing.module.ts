import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import RouterModule and use by exports in @NgModule
import { RouterModule, Routes } from '@angular/router';

// import HeroesComponent to use route
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


// định nghĩa route đến các components
const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  // ko cần dùng imports và declarations
  // imports: [
  //   CommonModule
  // ],
  // declarations: []
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
