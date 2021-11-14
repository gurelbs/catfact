import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './components/pages/homepage/homepage.component'
import {FavoriteComponent} from './components/pages/favorite/favorite.component'

const routes: Routes = [
  { path: 'all', component: HomepageComponent},
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: 'favorite', component: FavoriteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
