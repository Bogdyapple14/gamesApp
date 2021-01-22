import { Component, OnInit } from '@angular/core';
import { GameDetailsService } from 'src/app/shared/game-details.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  loading: boolean = false;

  constructor(private GameDetailsService: GameDetailsService) {}

  ngOnInit(): void {}

  async fetchGames(search: string) {
    this.loading = true;
    await this.GameDetailsService.fetchGames(search).then(() => {
      this.loading = false;
      this.GameDetailsService.shouldLoadGamesEmit.emit(true);
    });
  }
}
