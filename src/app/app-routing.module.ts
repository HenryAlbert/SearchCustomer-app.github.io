import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponentComponent } from "./page-not-found-component/page-not-found-component.component";


const routes: Routes = [
  {path: '',  redirectTo: 'HomeComponent',  pathMatch: 'full'},
  { path: 'HomeComponent', component: HomeComponent },
  { path: 'SearchComponent', component: SearchComponent },
  { path: 'ResultComponent', component: ResultComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
