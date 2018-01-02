import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import { RepoListComponent } from './repo-list/repo-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'langs', component: RepoComponent},
 // { path: 'detail/:id', component: RepoListComponent }
//  { path: 'dashboard', component: DashboardComponent },

];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}