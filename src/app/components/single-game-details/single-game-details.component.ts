import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetailsService } from 'src/app/shared/game-details.service';
import { Game } from 'src/app/shared/game.model';

@Component({
  selector: 'app-single-game-details',
  templateUrl: './single-game-details.component.html',
  styleUrls: ['./single-game-details.component.scss'],
})
export class SingleGameDetailsComponent implements OnInit {
  game!: Game;

  constructor(
    private route: ActivatedRoute,
    private GameDetailsService: GameDetailsService
  ) {}

  ngOnInit(): void {
    this.FetchGameDetails();
  }

  async FetchGameDetails() {
    this.game = await this.GameDetailsService.fetchGameDetails(
      this.route.snapshot.params['id']
    );
  }
}
