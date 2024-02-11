import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path:'', 
    redirectTo: '', 
    pathMatch: 'full' 
  },
  {
    path: '',
    loadChildren: ()=> import('src/app/pages/home/home.module').then(v=> v.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
