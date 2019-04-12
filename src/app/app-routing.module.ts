import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    'path': 'new',
    'component': ReactiveFormComponent
  },
  {
    'path': 'aboutUs',
    'component': AboutUsComponent
  },
  {
    'path': '',
    'redirectTo': '/new',
    'pathMatch': 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
