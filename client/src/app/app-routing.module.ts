import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FavoriteComponent } from './components/pages/favorite/favorite.component';
import { MainComponent } from './components/pages/main/main.component';
const routes: Routes = [
  { path: 'all', component: HomepageComponent },
  { path: '', component: MainComponent },
  { path: 'favorite', component: FavoriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
