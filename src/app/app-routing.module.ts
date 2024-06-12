import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideListComponent } from './slide-list/slide-list.component';
import { FullStackComponent } from './full-stack/full-stack.component';

const routes: Routes = [
  {path:"", component: SlideListComponent},
  {path:"full-stack", component: FullStackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
