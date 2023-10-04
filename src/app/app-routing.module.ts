import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pajes/home/home.component';
import { ContentComponent } from './pajes/content/content.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"content/:id",
    component:ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
