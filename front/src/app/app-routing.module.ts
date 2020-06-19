import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pags/home/home.component';
import { HelpComponent } from './pags/help/help.component';


const routes: Routes = [
  {path:"Home", component:HomeComponent},
  {path:"Help", component:HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
