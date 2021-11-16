import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FavoriteComponent } from './components/pages/favorite/favorite.component';
import { MainComponent } from './components/pages/main/main.component';
import { BreedsComponent } from './components/pages/breeds/breeds.component';
import { AboutComponent } from './components/pages/about/about.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'all', component: HomepageComponent },
  { path: 'favorites', component: FavoriteComponent },
  { path: 'breeds', component: BreedsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
