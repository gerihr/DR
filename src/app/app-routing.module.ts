import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetInsuranceComponent } from './insurance/get-insurance/get-insurance.component';
import { HomeComponent } from './home/home.component';
import { InsurerDataComponent } from './insurer-data/insurer-data.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'insurance', component: InsurerDataComponent},
  {path: 'start-insurance', component: GetInsuranceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
