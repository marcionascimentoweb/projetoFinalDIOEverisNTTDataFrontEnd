import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './view/city/city.component';
import { CountryComponent } from './view/country/country.component';
import { IndexComponent } from './view/index/index.component';
import { StateComponent } from './view/state/state.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'country', component: CountryComponent},
  {path: 'states', component: StateComponent},
  {path: 'city', component: CityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
