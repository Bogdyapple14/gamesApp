import { Component, Input, OnInit } from '@angular/core';
import { GameDetailsService } from 'src/app/shared/game-details.service';
import { Game } from 'src/app/shared/game.model';

@Component({
  selector: 'app-games',
  templateUrl: 'games.component.html',
  styleUrls: ['games.component.scss'],
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  @Input() loading: boolean = true;

  constructor(private GameDetailsService: GameDetailsService) {}

  ngOnInit(): void {
    this.games = this.GameDetailsService.getGames();
    if (this.games) this.loading = false;
  }
}
