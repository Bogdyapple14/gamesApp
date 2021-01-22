import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games.component';
import { GameComponent } from './components/game/game.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { InputTextModule } from 'primeng/inputtext';
import { TruncateStringPipe } from './shared/truncate-string.pipe';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameComponent,
    HomepageComponent,
    TruncateStringPipe,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
