import { Component, OnInit } from '@angular/core';
import { GameDetailsService } from 'src/app/shared/game-details.service';
import { Game } from 'src/app/shared/game.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoriteGames: any;

  constructor(private GameDetailsService: GameDetailsService) {}

  ngOnInit(): void {
    this.favoriteGames = this.GameDetailsService.getFavoriteGames();
  }
}
