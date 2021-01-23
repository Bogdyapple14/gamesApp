import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SingleGameDetailsComponent } from './components/single-game-details/single-game-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'details/:id/:name',
    component: SingleGameDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
